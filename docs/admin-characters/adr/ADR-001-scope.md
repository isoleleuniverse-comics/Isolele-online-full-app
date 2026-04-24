# ADR-001 - Scope et methode de livraison pour Admin Characters

- Date: 2026-04-24
- Statut: Accepte
- Contexte: la modification des characters cote admin etait partiellement preparee (actions/composants), mais non branchee de bout en bout.

## Decision
Nous livrons en petits lots, avec documentation vivante obligatoire:
1. Code fonctionnel dans un lot restreint.
2. Verification technique immediate (build et tests manuels cibles).
3. Trace ecrite dans `journal.md`.
4. Etat coche dans `checklist.md`.

## Definition of Done d'un lot
Un lot est considere termine seulement si:
- Le comportement cible fonctionne de bout en bout.
- Les erreurs utilisateur sont gerees (message explicite).
- Le controle d'acces est garanti pour les actions sensibles.
- Une verification est executee (build ou test adapte).
- Le journal est mis a jour avec date, changements, resultats et limites.

## Impacts
- Plus de tracabilite sur les decisions.
- Moins de risque de regressions silencieuses.
- Avancement lisible sans devoir relire tout le code.
