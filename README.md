# Docker + Node.js Bootstrap

## Installation initiale des dépendances NPM dans le répertoire local avec Docker

A noter : _ne jamais installer les dépendances NPM directement depuis l'environnement de travail local avec la commande `npm install` car l'environnement de travail local est différent de l'environnement du container_.

- Installation des dépendances NPM
- Suppression du container Docker temporaire
- Les dépendances NPM restent présentes dans le volume local ./api/node_modules``
- Les dépendances NPM seront synchronisées dans le volume du container distant lors du prochain démarrage des services Docker.

`docker compose run --rm <service-nodejs> npm install`

Exemple : `docker compose run --rm api npm install`

## Démarrer les services Docker

- Démarrer les services, networks et containers Docker :

`docker compose up`

- Démarrer les services et reprendre la main dans le terminal :

`docker compose up -d`

## Installation de nouvelles dépendances NPM après la création initiale du container Docker

- Afficher les containers Docker utilisés :
`docker compose ps`

- Exécuter une commande dans un container __déjà démarré__ :
`docker exec -ti <container id> <commande>`

## Suppression de tous les services Docker

`docker compose down`

## Suppression du container Docker

`docker rm <nom-du-container>`

## Suppression des dépendances NPM dans le répertoire local
`rm -rf ./api/node_modules`

--

<img src="https://sherpa.one/images/sherpa-logotype.png" width="120px">

__Alexandre Leroux__

_Enseignant / Formateur_<br>
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

https://sherpa.one
