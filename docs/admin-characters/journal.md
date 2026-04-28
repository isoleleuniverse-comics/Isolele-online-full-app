# Journal - Admin Characters

## 2026-04-24

### Lot 1 - Fiabilisation de la base d'edition
- `EditableField` corrige et stabilise.
- Support uniforme `input`/`textarea` via prop `as`.
- Rollback valeur locale en cas d'erreur + toast de feedback.

### Lot 2 - Edition textuelle branchee
- Page detail admin character connectee a un panneau d'edition client.
- Champs modifies: `name`, `title`, `origin`, `description`.
- Sauvegarde vers server action puis `router.refresh()` pour coherence UI.

### Lot 3 - Upload image branche
- `ImageUploadField` integre dans la page detail.
- Upload + mise a jour DB + feedback toast + rafraichissement UI.

### Lot 4 - Securite et coherence d'acces
- Actions serveur `updateCharacterAction` et `uploadCharacterImageAction` proteges par `requireAdmin()`.
- Resolution personnage securisee par `id` ou `slug`.

### Lot 5 - Finition UX et stabilite
- Messages utilisateur homogenises en francais simple (ASCII).
- Textes admin sidebar nettoyes.
- Fallback conserve (data statique) si DB vide pour eviter de casser l'admin.

### Verification
- Lint cible des fichiers modifies: OK.
- Build Next.js: KO dans ce repo a cause d'une dependance Prisma manquante (`@prisma/client/runtime/library`).
- Verification manuelle recommandee: edition de 4 champs + upload image + controle non-admin.

### Deblocage auth (2026-04-24)
- Ajout d'une page `/login` (email + mot de passe Supabase).
- Ajout d'un client Supabase navigateur pour `signInWithPassword`.
- Middleware ajuste pour ne pas rediriger `/login` vers la version localisee.
