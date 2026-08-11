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

- `cypress/e2e/api/` : tests des requêtes API (login, panier, avis)
- `cypress/e2e/fonctionnel/` : tests fonctionnels (connexion, panier, affichage produits)
- `cypress/e2e/smoke/` : smoke tests (vérifications rapides des éléments essentiels)
- `cypress/e2e/xss-tests/` : test de sécurité (faille XSS dans l'espace commentaire)

## Générer le rapport

Après `npx cypress run`, les vidéos des tests sont générées dans `cypress/videos`, et les captures d'écran en cas d'échec dans `cypress/screenshots`.

## Anomalies connues

Deux anomalies ont été détectées sur la gestion du panier (stock négatif, quantité négative acceptée). Voir le bilan de campagne de test pour le détail.