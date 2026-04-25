interface Slide {
    id: string
    type: "book" | "game"
    tagKey: string
    titleKey: string
    subtitleKey: string
    descKey: string
    buttonKey: string
    image: string
    href: string
    accentColor: string
}

export const slides : Slide[] = [
    {
        id: "zaiire",
        type: "book",
        tagKey: "book_welcome_tag",
        titleKey: "book_welcome_title",
        subtitleKey: "book_welcome_subtitle",
        descKey: "book_welcome_desc",
        buttonKey: "book_welcome_button",
        image:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260321_113436-ktAJOL2e0SS0pkTY6aPnn7aBKxr3pq.jpg",
        href: "/books/zaiire",
        accentColor: "#F6B800",
    },
    {
        id: "makanda",
        type: "book",
        tagKey: "book_makanda_tag",
        titleKey: "book_makanda_title",
        subtitleKey: "book_makanda_subtitle",
        descKey: "book_makanda_desc",
        buttonKey: "book_makanda_button",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIMOYA%20-%20THE%20RISING%20KANDAKE-kpNHOGXUp1l9A5z7uJ2Z4kI3v7e0ek.jpg",
        href: "/books/makanda",
        accentColor: "#C0392B",
    },
    {
        id: "bambula",
        type: "book",
        tagKey: "book_bambula_tag",
        titleKey: "book_bambula_title",
        subtitleKey: "book_bambula_subtitle",
        descKey: "book_bambula_desc",
        buttonKey: "book_bambula_button",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bambula%201-UAlmQoZVy1GslUfmVvqc5bdDDdEQdX.jpg",
        href: "/books/bambula",
        accentColor: "#B3541E",
    },
    {
        id: "mokele",
        type: "book",
        tagKey: "book_mokele_tag",
        titleKey: "book_mokele_title",
        subtitleKey: "book_mokele_subtitle",
        descKey: "book_mokele_desc",
        buttonKey: "book_mokele_button",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mokele.png-7sTyiUJYN8wJbiGll8YdVThtR4F8FT.jpeg",
        href: "/books/mokele",
        accentColor: "#4169E1",
    },
    {
        id: "zaiire-universe",
        type: "book",
        tagKey: "book_zaiire_tag",
        titleKey: "book_zaiire_title",
        subtitleKey: "book_zaiire_subtitle",
        descKey: "book_zaiire_desc",
        buttonKey: "book_zaiire_button",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260308-WA0059-75yxyGjuDt9hhqXF6obymfG8BpNLz4.jpg",
        href: "/books/zaiire",
        accentColor: "#F6B800",
    },
    {
        id: "kufu",
        type: "game",
        tagKey: "book_kufu_tag",
        titleKey: "book_kufu_title",
        subtitleKey: "book_kufu_subtitle",
        descKey: "book_kufu_desc",
        buttonKey: "book_kufu_button",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260321_113436-ktAJOL2e0SS0pkTY6aPnn7aBKxr3pq.jpg",
        href: "/kufu-game",
        accentColor: "#F6B800",
    },
    {
        id: "amara",
        type: "book",
        tagKey: "book_amara_tag",
        titleKey: "book_amara_title",
        subtitleKey: "book_amara_subtitle",
        descKey: "book_amara_desc",
        buttonKey: "book_amara_button",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1173-wrVJYiZhuW6ZvCM0Xronsu544ccrqV.jpeg",
            href: "/#hero",
        accentColor: "#1E90B3",
    },
    {
        id: "zattar",
        type: "book",
        tagKey: "book_zattar_tag",
        titleKey: "book_zattar_title",
        subtitleKey: "book_zattar_subtitle",
        descKey: "book_zattar_desc",
        buttonKey: "book_zattar_button",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e9c64c65-3717-4fe3-a391-885767df3303-LbjnMwCViF43pwErKmoFv7iGxQdCeQ.jpeg",
        href: "/books/zattar",
        accentColor: "#2E8B57",
    },
    {
        id: "zaiko",
        type: "book",
        tagKey: "book_zaiko_tag",
        titleKey: "book_zaiko_title",
        subtitleKey: "book_zaiko_subtitle",
        descKey: "book_zaiko_desc",
        buttonKey: "book_zaiko_button",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1175-njlosetUOsqZszKylrOXsIRLw0l3s7.jpeg",
        href: "/books/zaiko",
        accentColor: "#8B7355",
    },
]


