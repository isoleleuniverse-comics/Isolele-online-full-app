# Checklist - Admin Characters

- [x] Lot 1: Corriger `EditableField` (lecture/edition/sauvegarde/rollback).
- [x] Lot 1: Uniformiser API composant (`as` input/textarea).
- [x] Lot 1: Documenter la decision dans ADR.

- [x] Lot 2: Integrer UI edition dans detail admin character.
- [x] Lot 2: Connecter `name/title/origin/description` a `updateCharacterAction`.
- [x] Lot 2: Afficher etats de sauvegarde/erreur.

- [x] Lot 3: Integrer upload image dans detail admin.
- [x] Lot 3: Connecter a `uploadCharacterImageAction`.
- [x] Lot 3: Verifier coherence preview + refresh.

- [x] Lot 4: Exiger contexte admin pour chaque action sensible.
- [x] Lot 4: Gerer resolution `id`/`slug` pour coherence routing.

- [x] Lot 5: Homogeneiser les messages UX admin.
- [x] Lot 5: Corriger les textes admin mal encodes.
- [ ] Lot 5: Validation manuelle complete en session navigateur (a realiser apres deploiement local).

- [x] Blocage leve: page `/login` ajoutee pour ouvrir une session admin.
