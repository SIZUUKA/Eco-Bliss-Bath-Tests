# EcoBlissBath

Ce projet est un site e-commerce de produits de beauté écoresponsables, développé avec Angular CLI (version 13.3.0). Ce dépôt contient également les tests automatisés du site, réalisés avec Cypress.

## Lancer l'application

Lancer `ng serve` pour démarrer le serveur de développement. Ouvrir `http://localhost:4200/` dans le navigateur.

## Installation des tests Cypress

1. Installer les dépendances :

npm install

## Lancer les tests

Pour ouvrir l'interface Cypress et lancer les tests un par un :

npx cypress open

Pour lancer tous les tests d'un coup en ligne de commande :

npx cypress run

## Structure des tests

- `cypress/e2e/api/` : tests des requêtes API (login, commandes/panier, produits, avis)
- `cypress/e2e/fonctionnel/` : tests fonctionnels (connexion, panier)
- `cypress/e2e/smoke/` : smoke tests (vérifications rapides des éléments essentiels)
- `cypress/e2e/xss-tests/` : test de sécurité (faille XSS dans l'espace commentaire)

## Générer le rapport

Après `npx cypress run`, les captures d'écran en cas d'échec sont générées dans `cypress/screenshots`.
