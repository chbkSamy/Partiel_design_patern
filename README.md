# Conception du système d'impression de documents

## Langage choisi

JavaScript

## Design patterns implémentés

### Template Method

Utilisé pour définir une seule fois le déroulement global de fabrication. Ce choix est adapté car toutes les impressions suivent le même enchaînement d'étapes, mais certaines actions changent selon le type de document.

### Factory Method

Utilisé pour centraliser la création des documents. Ce choix permet d'éviter l'instanciation directe dans le code principal et facilite l'ajout de nouveaux types de documents.

### Adapter

Utilisé pour intégrer la carte vitale au système sans modifier le code fourni par la CPAM. Ce choix permet de rendre compatible une interface externe différente avec l'interface attendue par le système d'impression.

## Pourquoi ces choix

Ces choix répondent directement aux contraintes du sujet. Template Method fixe le processus global, Factory Method centralise la création des objets et l'Adapter assure l'intégration du système externe.

## Instructions d'exécution

1. Ouvrir un terminal dans le dossier du projet.
2. Exécuter : node index.js
3. Lire les messages affichés dans la console pour suivre les étapes d'impression.