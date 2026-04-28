# Architecture `src/`

## Dossiers principaux

| Dossier      | Rôle                                                                 |
| ------------ | -------------------------------------------------------------------- |
| `app/`       | Routes Next.js uniquement. Pas de logique métier.                    |
| `features/`  | Une feature = un domaine produit. Autonome et co-localisée.          |
| `shared/`    | Code partagé entre features. Jamais dépendant d'une feature.         |
| `server/`    | Code serveur uniquement. Jamais importé dans un Client Component.    |
| `cms/`       | Système de blocs de contenu.                                         |
| `generated/` | Code auto-généré (Prisma, etc.). Ne pas modifier manuellement.       |

## Règles d'import

```
app/       → peut importer : features/, shared/, server/ (server components uniquement)
features/  → peut importer : shared/, server/ (server components uniquement)
shared/    → peut importer : shared/ uniquement (jamais features/ ni server/)
server/    → peut importer : shared/ uniquement (jamais features/ ni app/)
```

## Structure cible détaillée

```
src/
├── app/                       ← routes Next.js uniquement
│   ├── [locale]/
│   │   └── (public)/
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       ├── books/[slug]/page.tsx
│   │       ├── characters/
│   │       ├── comics/
│   │       └── kufu-game/
│   ├── layout.tsx
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts
│
├── features/                  ← chaque feature est autonome
│   ├── navigation/
│   │   ├── config/            ← routes et labels centralisés
│   │   └── ui/
│   │       ├── header/        ← composants atomiques du header
│   │       └── footer/        ← composants atomiques du footer
│   ├── home/
│   │   ├── content/           ← traductions par section
│   │   ├── model/
│   │   ├── seo/
│   │   └── ui/
│   ├── books/
│   ├── characters/
│   ├── comics/
│   └── kufu-game/
│
├── shared/                    ← socle commun visible et tracké
│   ├── ui/                    ← composants shadcn + custom
│   ├── contexts/              ← ThemeContext, CartContext
│   ├── i18n/                  ← locales, LanguageContext
│   ├── lib/                   ← utils (cn), helpers
│   ├── hooks/                 ← hooks partagés (useMobile, etc.)
│   └── seo/                   ← JSON-LD, site-url
│
├── server/                    ← code serveur uniquement
│   ├── db/                    ← singleton Prisma
│   ├── actions/               ← server actions
│   └── supabase/              ← clients Supabase
│
├── cms/                       ← système de blocs de contenu
│
└── middleware.ts
```

## Convention de nommage

- **Fichiers** : `kebab-case.ts` / `kebab-case.tsx`
- **Composants** : `PascalCase` pour l'export, `kebab-case` pour le fichier
- **Feature** : chaque feature suit le pattern `content/ | model/ | seo/ | ui/`
- **Pas de re-exports inutiles** : importer directement depuis le fichier source
