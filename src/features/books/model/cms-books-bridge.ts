// features/books/model/cms-books-bridge.ts (Côté Site Public)
import { list } from "@vercel/blob";
import { getBookBySlug as getStaticBookBySlug } from "./books.data";
import type { BookPageData, BookPageSection, BookCta } from "./books.types";
import type { SupportedLocale } from "@/shared/i18n/locales";

let cachedBlobBaseUrl: string | null = null;

async function getBlobBaseUrl(): Promise<string | null> {
    if (cachedBlobBaseUrl) return cachedBlobBaseUrl;
    try {
        const { blobs } = await list({ limit: 1 });
        if (blobs.length > 0) {
            const url = new URL(blobs[0].url);
            cachedBlobBaseUrl = `${url.protocol}//${url.hostname}`;
            return cachedBlobBaseUrl;
        }
    } catch (error) {
        console.warn("Impossible de résoudre l'URL Vercel Blob pour les livres.");
    }
    return null;
}

/**
 * Reconstruit et mappe de manière intelligente les blocs CMS vers les types de 
 * sections structurés attendus par le composant BookStoryPage.
 */
export function mapCmsToBookPageData(cmsData: any): BookPageData {
    const blocks = cmsData.blocks || [];

    // 1. Récupération des métadonnées du bloc Hero si présent
    const heroBlock = blocks.find((b: any) => b.type === "hero");
    const heroTag = heroBlock?.data?.tag || "ISOLELE";

    // 2. Récupération des boutons d'appels à l'action (CTAs)
    const ctaBlocks = blocks.filter((b: any) => b.type === "callout" || b.type === "cta");
    const ctas: BookCta[] = ctaBlocks.map((b: any, index: number) => ({
        id: b.id || `cta-${index}`,
        label: b.data?.buttonLabel || b.data?.title || "DISCOVER",
        href: b.data?.href || "/#hero",
        style: index === 0 ? "primary" : "secondary"
    }));

    // S'il n'y a pas de CTA publié, on injecte un bouton par défaut
    if (ctas.length === 0) {
        ctas.push({ id: "explore", label: "EXPLORER L'UNIVERS", href: "/#hero", style: "primary" });
    }

    const sections: BookPageSection[] = [];

    // 3. Collecter les premiers paragraphes consécutifs pour former l'introduction (prose)
    const proseParagraphs: string[] = [];
    let i = 0;
    while (i < blocks.length && blocks[i].type === "paragraph") {
        const content = blocks[i].data?.content || blocks[i].content;
        if (content) {
            proseParagraphs.push(content);
        }
        i++;
    }

    if (proseParagraphs.length > 0) {
        sections.push({
            type: "prose",
            paragraphs: proseParagraphs
        });
    }

    // 4. Mapper le reste des blocs restants
    for (let j = i; j < blocks.length; j++) {
        const block = blocks[j];

        // Citation éditoriale -> image_quote
        if (block.type === "quote") {
            sections.push({
                type: "image_quote",
                image: cmsData.coverImage || "/royal-palace-background.png",
                imageAlt: "Kongo Cover Story",
                quote: block.data?.content || block.quote || "",
                attribution: block.data?.attribution || block.attribution || ""
            });
        }

        // Titres suivis de paragraphes -> heading_group
        if (block.type === "heading") {
            const groupHeading = block.data?.content || block.content || "Détails";
            let k = j + 1;
            let bodyText = "";

            while (k < blocks.length && blocks[k].type === "paragraph") {
                bodyText += (bodyText ? "\n\n" : "") + (blocks[k].data?.content || blocks[k].content || "");
                k++;
            }

            sections.push({
                type: "heading_group",
                sections: [
                    {
                        heading: groupHeading,
                        body: bodyText || "..."
                    }
                ]
            });

            j = k - 1; // Avancer l'index
        }

        // Galerie photo -> books_gallery
        if (block.type === "gallery") {
            let parsedImages: any[] = [];
            try {
                parsedImages = JSON.parse(block.data?.images || "[]");
            } catch {
                parsedImages = [];
            }

            sections.push({
                type: "books_gallery",
                heading: block.data?.caption || block.label || "Galerie",
                images: parsedImages.map((img: any) => ({
                    src: img.src || "",
                    alt: img.alt || "Visuel"
                })),
                caption: block.data?.caption || ""
            });
        }
    }

    return {
        slug: cmsData.slug,
        title: cmsData.title,
        metaDescription: cmsData.excerpt || "",
        heroImage: cmsData.coverImage || "/royal-palace-background.png",
        heroTag,
        accentColor: "#F6B800", // Couleur or royale signature
        keywords: [],
        sections,
        ctas
    };
}

/**
 * Récupère les données d'un livre depuis Vercel Blob (CMS) ou se rabat sur le fallback local statique.
 */
export async function fetchBookBySlug(slug: string, locale: SupportedLocale): Promise<BookPageData | null> {
    const blobUrl = await getBlobBaseUrl();

    if (!blobUrl) {
        return getStaticBookBySlug(slug, locale);
    }

    try {
        const response = await fetch(`${blobUrl}/pub/${locale}/books/${slug}.json`, {
            next: { revalidate: 60 }
        });

        if (!response.ok) throw new Error("Fichier de livre introuvable");
        const data = await response.json();

        return mapCmsToBookPageData(data);
    } catch (error) {
        console.warn(`Livre dynamique [${slug}] introuvable, chargement statique local.`);
        return getStaticBookBySlug(slug, locale);
    }
}