# Architecture `src/`

## Dossiers principaux

| Dossier      | Role                                                              |
| ------------ | ----------------------------------------------------------------- |
| `app/`       | Routes Next.js uniquement. Pas de logique metier.                 |
| `features/`  | Une feature = un domaine produit. Autonome et co-localisee.       |
| `shared/`    | Code partage entre features. Jamais dependant d'une feature.      |
| `server/`    | Code serveur uniquement. Jamais importe dans un Client Component. |
| `cms/`       | Systeme de blocs de contenu.                                      |
| `generated/` | Code auto-genere. Ne pas modifier manuellement.                   |

## Regles d'import

```text
app/       -> peut importer : features/, shared/, server/ (server components uniquement)
features/  -> peut importer : shared/, server/ (server components uniquement)
shared/    -> peut importer : shared/ uniquement (jamais features/ ni server/)
server/    -> peut importer : shared/ uniquement (jamais features/ ni app/)
```

## Structure cible detaillee

```text
src/
|-- app/                       <- routes Next.js uniquement
|   |-- [locale]/
|   |   `-- (public)/
|   |       |-- layout.tsx
|   |       |-- page.tsx
|   |       |-- books/[slug]/page.tsx
|   |       |-- characters/
|   |       |-- comics/
|   |       `-- kufu-game/
|   |-- layout.tsx
|   |-- globals.css
|   |-- robots.ts
|   `-- sitemap.ts
|
|-- features/                  <- chaque feature est autonome
|   |-- navigation/
|   |   |-- config/            <- routes et labels centralises
|   |   `-- ui/
|   |       |-- header/        <- composants atomiques du header
|   |       `-- footer/        <- composants atomiques du footer
|   |-- home/
|   |   |-- content/           <- traductions par section
|   |   |-- model/
|   |   |-- seo/
|   |   `-- ui/
|   |-- books/
|   |-- characters/
|   |-- comics/
|   `-- kufu-game/
|
|-- shared/                    <- socle commun visible et tracke
|   |-- ui/                    <- composants shadcn + custom
|   |-- contexts/              <- ThemeContext, CartContext
|   |-- i18n/                  <- locales, LanguageContext
|   |-- lib/                   <- utils, helpers
|   |-- hooks/                 <- hooks partages
|   `-- seo/                   <- JSON-LD, site-url
|
|-- server/                    <- code serveur uniquement
|   |-- actions/               <- server actions
|   `-- supabase/              <- clients Supabase
|
|-- cms/                       <- systeme de blocs de contenu
|
`-- middleware.ts
```

## Convention de nommage

- **Fichiers** : `kebab-case.ts` / `kebab-case.tsx`
- **Composants** : `PascalCase` pour l'export, `kebab-case` pour le fichier
- **Feature** : chaque feature suit le pattern `content/ | model/ | seo/ | ui/`
- **Pas de re-exports inutiles** : importer directement depuis le fichier source
