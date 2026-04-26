# Dossier Scripts

Ce dossier contient les scripts utilitaires du projet.
Prisma est maintenant notre source de vérité principale concernant le schéma de base de données.

## Éléments conservés

- `005_isolele_seed_data.sql` : Données de seed utiles à jouer avec Prisma si besoin.
- Scripts utilitaires non-SQL divers : `compress-project.sh`, `optimize-project.js`, etc.

## Migration SQL vers Prisma
La grande majorité des scripts d'initiation SQL historique ont été archivés dans le dossier `_archive`.
> Ne lancez pas de scripts SQL pour modifier la structure, utilisez Prisma :
> `npx prisma migrate dev` ou `npx prisma db push`

## Comment utiliser les seeds :
Une fois les migrations Prisma effectuées, injectez le seed SQL si vos tables sont vides.
```bash
npx prisma db seed
# Ou manuellement via psql ou le dashboard de Supabase (pour injecter 005_isolele_seed_data.sql)
```
