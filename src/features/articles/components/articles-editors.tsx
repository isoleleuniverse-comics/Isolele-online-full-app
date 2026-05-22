"use client";

import { useId, useRef, useState, useTransition } from "react";
import type { ArticleStatus } from "@/generated/prisma";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArticleBlockRenderer } from "../ui/article-block-renderer";
import {
    translateArticleAction,
    updateArticleAction,
    updateArticleStatusAction,
} from "../actions/update-artilces";
import {
    createArticleBlock,
    getReadingTimeMinutes,
    normalizeArticleBlocksDetailed,
    type ArticleBlock,
} from "../model/article-blocks";

type Props = {
    article: {
        id: string;
        adminLocale: string;
        articleLocale: string;
        title: string;
        excerpt: string | null;
        coverImage: string | null;
        seoTitle: string | null;
        seoDescription: string | null;
        blocksJson: unknown;
        status: ArticleStatus;
    };
};

export function ArticlesEditors({
    article,
}: Props) {
    const [title, setTitle] = useState(article.title);
    const [excerpt, setExcerpt] = useState(article.excerpt ?? "");
    const [coverImage, setCoverImage] = useState(article.coverImage ?? "");
    const [seoTitle, setSeoTitle] = useState(article.seoTitle ?? "");
    const [seoDescription, setSeoDescription] = useState(article.seoDescription ?? "");
    const [editorState] = useState(() =>
        normalizeArticleBlocksDetailed(article.blocksJson),
    );
    const [blocks, setBlocks] = useState<ArticleBlock[]>(
        editorState.blocks,
    );
    const [status, setStatus] = useState<ArticleStatus>(article.status);
    const [isPending, startTransition] = useTransition();
    const [isStatusPending, startStatusTransition] = useTransition();
    const [isUploading, startUploadTransition] = useTransition();
    const [isTranslating, startTranslateTransition] = useTransition();
    const [uploadError, setUploadError] = useState<string | null>(null);
    const [translationMessage, setTranslationMessage] = useState<string | null>(null);
    const coverImageInputId = useId();
    const insertImageInputRef = useRef<HTMLInputElement | null>(null);

    function addBlock(type: "paragraph" | "heading" | "image" | "quote") {
        setBlocks((current) => [
            ...current,
            createArticleBlock(type),
        ]);
    }

    function addImageBlockFromFile(file: File) {
        const nextBlock = createArticleBlock("image");
        setUploadError(null);
        setBlocks((current) => [
            ...current,
            nextBlock,
        ]);

        uploadImage(file, (imageUrl) => {
            setBlocks((current) =>
                current.map((block) => {
                    if (block.id !== nextBlock.id || block.type !== "image") {
                        return block;
                    }

                    return {
                        ...block,
                        url: imageUrl,
                    };
                }),
            );
        });
    }

    function updateBlock(index: number, nextBlock: ArticleBlock) {
        setBlocks((current) =>
            current.map((block, currentIndex) =>
                currentIndex === index ? nextBlock : block,
            ),
        );
    }

    function removeBlock(index: number) {
        setBlocks((current) =>
            current.filter((_, currentIndex) => currentIndex !== index),
        );
    }

    async function handleSave() {
        startTransition(async () => {
            await updateArticleAction({
                id: article.id,
                locale: article.adminLocale,
                title,
                excerpt,
                coverImage: coverImage || null,
                seoTitle: seoTitle || null,
                seoDescription: seoDescription || null,
                blocksJson: blocks,
            });
        });
    }

    function updateImageBlock(index: number, imageUrl: string) {
        setBlocks((current) =>
            current.map((block, currentIndex) => {
                if (currentIndex !== index || block.type !== "image") {
                    return block;
                }

                return {
                    ...block,
                    url: imageUrl,
                };
            }),
        );
    }

    function uploadImage(
        file: File,
        onUploaded: (imageUrl: string) => void,
    ) {
        startUploadTransition(async () => {
            setUploadError(null);
            const formData = new FormData();
            formData.append("file", file);
            formData.append("folder", "articles");

            const response = await fetch("/api/uploads/images", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                setUploadError("Impossible d'envoyer l'image pour le moment.");
                return;
            }

            const payload = await response.json() as { url: string };
            onUploaded(payload.url);
        });
    }

    function handleStatusChange(nextStatus: ArticleStatus) {
        startStatusTransition(async () => {
            await updateArticleStatusAction({
                id: article.id,
                locale: article.adminLocale,
                status: nextStatus,
            });
            setStatus(nextStatus);
        });
    }

    function handleTranslate(targetLocale: "fr") {
        startTranslateTransition(async () => {
            setTranslationMessage(null);

            try {
                const translatedArticle = await translateArticleAction({
                    id: article.id,
                    adminLocale: article.adminLocale,
                    targetLocale,
                });

                setTranslationMessage(
                    `Version ${translatedArticle.locale.toUpperCase()} mise a jour: ${translatedArticle.title}`,
                );
            } catch (error) {
                setTranslationMessage(
                    error instanceof Error
                        ? error.message
                        : "La traduction a echoue.",
                );
            }
        });
    }

    function getStatusLabel(value: ArticleStatus) {
        if (value === "DRAFT") return "Brouillon";
        if (value === "REVIEW") return "En revision";
        if (value === "PUBLISHED") return "Publie";
        return "Archive";
    }

    const previewDate = new Intl.DateTimeFormat("fr", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date());
    const previewReadingTime = getReadingTimeMinutes(blocks);
    const effectiveSeoTitle = seoTitle.trim() || title.trim() || "Untitled article";
    const effectiveSeoDescription =
        seoDescription.trim() ||
        excerpt.trim() ||
        "Discover this article on ISOLELE.";
    const previewPath = `/${article.articleLocale}/articles/preview`;

    return (
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(420px,46%)]">
            <section className="space-y-6">
                <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                                Editeur
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Modifie le contenu a gauche, le rendu se met a jour a droite.
                            </p>
                            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                                Article locale: {article.articleLocale}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => handleStatusChange("DRAFT")}
                                disabled={isStatusPending}
                            >
                                Brouillon
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => handleStatusChange("REVIEW")}
                                disabled={isStatusPending}
                            >
                                Review
                            </Button>
                            <Button
                                type="button"
                                size="sm"
                                onClick={() => handleStatusChange("PUBLISHED")}
                                disabled={isStatusPending}
                            >
                                Publier
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => handleStatusChange("ARCHIVED")}
                                disabled={isStatusPending}
                            >
                                Archiver
                            </Button>
                        </div>
                    </div>

                    {article.articleLocale === "en" ? (
                        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-border pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => handleTranslate("fr")}
                                disabled={isTranslating}
                            >
                                {isTranslating ? "Traduction..." : "Traduire en francais"}
                            </Button>

                            <p className="text-sm text-muted-foreground">
                                L&apos;anglais est la source de traduction pour cette V1.
                            </p>
                        </div>
                    ) : null}

                    {translationMessage ? (
                        <div className="mt-4 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted-foreground">
                            {translationMessage}
                        </div>
                    ) : null}

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                        <div className="text-sm text-muted-foreground">
                            Statut actuel: <span className="font-medium text-foreground">{getStatusLabel(status)}</span>
                        </div>
                        <Button
                            type="button"
                            onClick={handleSave}
                            disabled={isPending || isUploading}
                        >
                            {isPending ? "Sauvegarde..." : isUploading ? "Upload..." : "Sauvegarder"}
                        </Button>
                    </div>
                </div>

                <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
                    <div className="space-y-5">
                        <div>
                            <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                                Hero
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => document.getElementById(coverImageInputId)?.click()}
                                >
                                    Importer la couverture
                                </Button>
                                <Input
                                    value={coverImage}
                                    onChange={(e) => setCoverImage(e.target.value)}
                                    placeholder="URL image de couverture"
                                    className="min-w-[260px] flex-1"
                                />
                            </div>
                            <input
                                id={coverImageInputId}
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (!file) return;
                                    uploadImage(file, setCoverImage);
                                    e.currentTarget.value = "";
                                }}
                                className="hidden"
                            />
                            {coverImage ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={coverImage}
                                    alt=""
                                    className="mt-4 h-44 w-full rounded-2xl border border-border object-cover"
                                />
                            ) : null}
                        </div>

                        <div>
                            <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                                Titre
                            </p>
                            <Textarea
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Titre de l\u2019article"
                                className="min-h-24 resize-none border-0 px-0 py-0 text-4xl font-semibold leading-tight shadow-none focus-visible:ring-0"
                            />
                        </div>

                        <div>
                            <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                                Extrait
                            </p>
                            <Textarea
                                value={excerpt}
                                onChange={(e) => setExcerpt(e.target.value)}
                                placeholder="Resume court de l\u2019article"
                                className="min-h-24 resize-none border-0 px-0 py-0 text-lg leading-8 text-muted-foreground shadow-none focus-visible:ring-0"
                            />
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
                    <div className="space-y-5">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                                    SEO
                                </p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Ces champs sont prioritaires pour les balises meta. Sinon on retombe sur le titre et l&apos;extrait.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="mb-2 flex items-center justify-between gap-3">
                                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                                    SEO title
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {seoTitle.length}/60
                                </p>
                            </div>
                            <Input
                                value={seoTitle}
                                onChange={(e) => setSeoTitle(e.target.value)}
                                placeholder="Titre SEO"
                            />
                        </div>

                        <div>
                            <div className="mb-2 flex items-center justify-between gap-3">
                                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                                    SEO description
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {seoDescription.length}/160
                                </p>
                            </div>
                            <Textarea
                                value={seoDescription}
                                onChange={(e) => setSeoDescription(e.target.value)}
                                placeholder="Description SEO"
                                className="min-h-24 resize-y"
                            />
                        </div>

                        <div className="rounded-2xl border border-border bg-background/70 p-4">
                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                                Apercu moteur de recherche
                            </p>
                            <div className="mt-4 space-y-1">
                                <p className="text-xl leading-7 text-[#1a0dab]">
                                    {effectiveSeoTitle}
                                </p>
                                <p className="text-sm text-[#006621]">
                                    isolele.com{previewPath}
                                </p>
                                <p className="text-sm leading-6 text-muted-foreground">
                                    {effectiveSeoDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
                    {editorState.warnings.length > 0 ? (
                        <div className="mb-5 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
                            Certains blocs n&apos;etaient pas reconnus et ont ete preserves en lecture seule.
                        </div>
                    ) : null}

                    {uploadError ? (
                        <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                            {uploadError}
                        </div>
                    ) : null}

                    <div className="mb-5 flex flex-wrap gap-2">
                        <Button type="button" variant="outline" size="sm" onClick={() => addBlock("paragraph")}>
                            + Paragraphe
                        </Button>
                        <Button type="button" variant="outline" size="sm" onClick={() => addBlock("heading")}>
                            + Titre
                        </Button>
                        <Button type="button" variant="outline" size="sm" onClick={() => addBlock("image")}>
                            + Image
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => insertImageInputRef.current?.click()}
                        >
                            Importer une image
                        </Button>
                        <Button type="button" variant="outline" size="sm" onClick={() => addBlock("quote")}>
                            + Citation
                        </Button>
                    </div>

                    <input
                        ref={insertImageInputRef}
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            addImageBlockFromFile(file);
                            e.currentTarget.value = "";
                        }}
                        className="hidden"
                    />

                    <div className="space-y-4">
                        {blocks.map((block, index) => (
                            <div key={block.id} className="rounded-2xl border border-border bg-background/60 p-4">
                                <div className="mb-3 flex items-center justify-between gap-3">
                                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                                        {block.type}
                                    </p>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => removeBlock(index)}
                                    >
                                        Supprimer
                                    </Button>
                                </div>

                                {block.type === "paragraph" ? (
                                    <Textarea
                                        value={block.text}
                                        onChange={(e) =>
                                            updateBlock(index, {
                                                ...block,
                                                text: e.target.value,
                                            })
                                        }
                                        placeholder="Votre paragraphe..."
                                        className="min-h-36 resize-y border-0 px-0 py-0 text-base leading-8 shadow-none focus-visible:ring-0"
                                    />
                                ) : null}

                                {block.type === "heading" ? (
                                    <div className="space-y-3">
                                        <Input
                                            value={block.text}
                                            onChange={(e) =>
                                                updateBlock(index, {
                                                    ...block,
                                                    text: e.target.value,
                                                })
                                            }
                                            placeholder="Titre de section"
                                            className="h-auto border-0 px-0 py-0 text-3xl font-semibold shadow-none focus-visible:ring-0"
                                        />

                                        <select
                                            value={block.level ?? 2}
                                            onChange={(e) =>
                                                updateBlock(index, {
                                                    ...block,
                                                    level: Number(e.target.value) as 1 | 2 | 3,
                                                })
                                            }
                                            className="rounded-lg border border-input bg-transparent px-3 py-2 text-sm"
                                        >
                                            <option value={1}>H1</option>
                                            <option value={2}>H2</option>
                                            <option value={3}>H3</option>
                                        </select>
                                    </div>
                                ) : null}

                                {block.type === "image" ? (
                                    <div className="space-y-3">
                                        {!block.url ? (
                                            <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-6 text-center">
                                                <p className="text-sm text-muted-foreground">
                                                    Aucune image pour ce bloc.
                                                </p>
                                                <div className="mt-4 flex flex-wrap justify-center gap-3">
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() =>
                                                            document.getElementById(`image-block-upload-${block.id}`)?.click()
                                                        }
                                                    >
                                                        Importer un fichier
                                                    </Button>
                                                </div>
                                            </div>
                                        ) : null}

                                        <div className="flex flex-wrap gap-3">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="sm"
                                                onClick={() =>
                                                    document.getElementById(`image-block-upload-${block.id}`)?.click()
                                                }
                                            >
                                                {block.url ? "Remplacer l'image" : "Choisir une image"}
                                            </Button>
                                            <Input
                                                value={block.url}
                                                onChange={(e) =>
                                                    updateBlock(index, {
                                                        ...block,
                                                        url: e.target.value,
                                                    })
                                                }
                                                placeholder="URL image"
                                                className="min-w-[240px] flex-1"
                                            />
                                        </div>

                                        <input
                                            id={`image-block-upload-${block.id}`}
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (!file) return;
                                                uploadImage(file, (imageUrl) =>
                                                    updateImageBlock(index, imageUrl),
                                                );
                                                e.currentTarget.value = "";
                                            }}
                                            className="hidden"
                                        />

                                        {block.url ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                src={block.url}
                                                alt={block.alt ?? ""}
                                                className="h-56 w-full rounded-2xl border border-border object-cover"
                                            />
                                        ) : null}

                                        <Input
                                            value={block.alt ?? ""}
                                            onChange={(e) =>
                                                updateBlock(index, {
                                                    ...block,
                                                    alt: e.target.value,
                                                })
                                            }
                                            placeholder="Texte alternatif"
                                        />

                                        <Input
                                            value={block.caption ?? ""}
                                            onChange={(e) =>
                                                updateBlock(index, {
                                                    ...block,
                                                    caption: e.target.value,
                                                })
                                            }
                                            placeholder="Legende"
                                        />
                                    </div>
                                ) : null}

                                {block.type === "quote" ? (
                                    <div className="space-y-3">
                                        <Textarea
                                            value={block.text}
                                            onChange={(e) =>
                                                updateBlock(index, {
                                                    ...block,
                                                    text: e.target.value,
                                                })
                                            }
                                            placeholder="Citation"
                                            className="min-h-28 resize-y border-0 px-0 py-0 text-2xl italic shadow-none focus-visible:ring-0"
                                        />

                                        <Input
                                            value={block.author ?? ""}
                                            onChange={(e) =>
                                                updateBlock(index, {
                                                    ...block,
                                                    author: e.target.value,
                                                })
                                            }
                                            placeholder="Auteur"
                                        />
                                    </div>
                                ) : null}

                                {block.type === "unsupported" ? (
                                    <div className="space-y-3">
                                        <p className="text-sm text-amber-700">
                                            Bloc non supporte preserve pour eviter une perte de contenu.
                                        </p>
                                        <pre className="overflow-x-auto rounded bg-neutral-100 p-3 text-xs">
                                            {JSON.stringify(block.raw, null, 2)}
                                        </pre>
                                    </div>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <aside className="xl:sticky xl:top-8 xl:h-[calc(100vh-4rem)]">
                <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#2a2620] bg-[#0d0c0b] shadow-2xl">
                    <div className="border-b border-[#2a2620] px-6 py-4 text-[#a79b8b]">
                        <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#c9a84c]">
                            Apercu live
                        </p>
                        <p className="mt-1 text-sm text-[#8c8070]">
                            Cette fenetre reprend immediatement les donnees de l&apos;editeur.
                        </p>
                    </div>

                    <div className="overflow-y-auto">
                        <article>
                            <header className="relative flex min-h-[420px] items-end overflow-hidden">
                                {coverImage ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={coverImage}
                                        alt=""
                                        className="absolute inset-0 h-full w-full object-cover opacity-75"
                                    />
                                ) : null}
                                <div className="absolute inset-0 bg-gradient-to-b from-[#0d0c0b]/20 via-[#0d0c0b]/55 to-[#0d0c0b]" />
                                <div className="relative z-10 px-6 pb-10 pt-20">
                                    <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.26em] text-[#c9a84c]">
                                        <span className="h-px w-9 bg-[#c9a84c]" />
                                        ISOLELE Editorial
                                    </p>
                                    <h1 className="max-w-3xl font-serif text-4xl font-light leading-[1.03] text-white sm:text-5xl">
                                        {title || "Titre de l\u2019article"}
                                    </h1>
                                    {excerpt ? (
                                        <p className="mt-6 max-w-2xl text-base font-light leading-8 text-[#e8e0d4]/75">
                                            {excerpt}
                                        </p>
                                    ) : null}
                                    <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-[#8c8070]">
                                        <span>{previewDate}</span>
                                        <span className="text-[#7d6630]">/</span>
                                        <span>{previewReadingTime} min read</span>
                                    </div>
                                </div>
                            </header>

                            <ArticleBlockRenderer blocks={blocks} />
                        </article>
                    </div>
                </div>
            </aside>
        </div>
    );
}
