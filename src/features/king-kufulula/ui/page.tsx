import type { Metadata } from "next";
import {isSupportedLocale, DEFAULT_LOCALE, type SupportedLocale} from "@/shared/i18n/locales"
import { KingKufululaPage } from "./king-kufulula-page";
import { KingKufululaData } from "./data";

export async function generateMetadata({
    params,
}: {
    params : Promise <{locale:string}>;
}): Promise <Metadata> {
    const {locale} = await params;
    const safeLocale: SupportedLocale = isSupportedLocale(locale)? locale : DEFAULT_LOCALE;

    const content =  KingKufululaData[safeLocale] ?? KingKufululaData.en;

    return {
        title: content.title,
        description: content.metaDescription,
        alternates: {
            canonical:`/${safeLocale}/king-kufulula`
        },
        openGraph:{
            title: content.title,
            description : content.metaDescription,
            url: `/${safeLocale}/king-kufulula`,
            type:"article"
        }
    }
}

export default async function Page ({
    params
}:{
    params: Promise <{locale:string}>;
}){
    const {locale} = await params;
    const safeLocale: SupportedLocale = isSupportedLocale(locale)? locale: DEFAULT_LOCALE;

    return <KingKufululaPage locale = {safeLocale}/>
}