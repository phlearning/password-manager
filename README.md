
# Password Manager Project

Ce projet a pour but de stocker des mots de passes. Par oubli le mot de passe est bien crypté sur le backend mais je ne renvoie pas le mot de passe decrypté.

# Pour lancer le projet

Si vous disposer de make alors il suffit de faire `make`

Sinon faites `docker compose up --build`

# Quelques informations

Django est de base un ORM donc il gère le base donnée et évite ainsi des problèmes avec des injections sql. Angular quand à lui nous permet de nous concentrer
sur le design du web en penser en termes de composants. J'ai choisi ces deux derniers car j'avais précédemment travailler avec des frameworks.

## Structure
```
project/
    .env
    backend/
        backend/
            __init__.py
            __pycache__/
            asgi.py
            settings.py
            urls.py
            wsgi.py
        Dockerfile
        manage.py
        passwords/
            __init__.py
            __pycache__/
            ...
        requirements.txt
        script_django.sh
    docker-compose.yml
    frontend/
        .angular/
        .editorconfig
        .gitignore
        .vscode/
        angular.json
        Dockerfile
        package.json
        public/
        README.md
        src/
        tailwind.config.js
        tsconfig.app.json
        tsconfig.json
        tsconfig.spec.json
    Makefile
    README.md
```

## Backend
Le backend est une application Django située dans le répertoire backend/. Il gère les points de terminaison de l'API et les interactions avec la base de données pour stocker et récupérer les mots de passe.

### Fichiers Clés
```
backend/settings.py: Configuration du projet Django.
backend/urls.py: Routage des URL pour le projet Django.
backend/passwords/: Contient l'application Django pour la gestion des mots de passe.
```

## Frontend
Le frontend est une application Angular située dans le répertoire frontend/. Il fournit l'interface utilisateur pour le gestionnaire de mots de passe.
Je n'ai pas trop eu le temps de départager en composants en revanche Angular permet de facilement séparer chaque composants et de gérer les états par un service ou par ngrx.

Fichiers Clés
frontend/src/: Contient le code source de l'application Angular.