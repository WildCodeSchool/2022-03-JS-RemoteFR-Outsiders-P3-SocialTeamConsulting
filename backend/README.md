# MVC Express

## Description

Basé sur une structure MVC, Back-end du projet de Social Team Consulting.

## Etapes

1. Cloner le repo depuis Github.
2. Effectuer l’installation des packages en lançant la commande `npm install` ou `yarn install`.
3. Créer un fichier  _.env_ et le remplir en se basant sur le _.env.sample_ avec ses informations personnelles concernant les paramètres de la base.
Ne pas supprimer le fichier _.sample_ file.

```
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```

4. Adaptez _database.sql_ avec vos propres tables. Importez le script vers votre serveur SQL en le faisant manuellement ou en effectuant la commande `npm run migrate` ou `yarn run migrate`.
5. Lancez le serveur complet avec `npm run dev` ou `yarn run dev`. Ce qui lancera `index.js` en utilisant _nodemon_.
6. Allez sur votre `localhost:5000` à l'aide de votre navigateur.

### Utilisateurs Windows

Si vous developpez sur Windows, vous devez éditer votre configuration git avec cette commande:

`git config --global core.autocrlf true`

## Exemple

Un exemple pour accéder aux routes:

- Page principale: [GET localhost:5000/](localhost:5000/)
- Associations browse: [GET localhost:5000/associations](localhost:5000/associations)
- Associations read: [GET localhost:5000/associations/bymail/:email](localhost:5000/associations/bymail/uneadresse4@hello.fr)
- Associations edit: PUT localhost:5000/associations/:id
- Associations add: POST localhost:5000/associations

Vous pouvez retrouver toutes ces routes déclarées dans le document `src/router.js`.
Ajoutez de nouvelles routes, controllers et models.
