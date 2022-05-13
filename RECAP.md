# Programmation AJAX avec JavaScript

# Web Platform

> Ensemble de technologies et de concepts qui permettent de développer des applications web modernes.

* DOM: Document Object Model
    * HTML: Hypertext Markup Language - Structure de la page web
    * CSS: Cascading Style Sheets - Présentation
    * JS: JavaScript - Interaction logique et utilisateur

Le DOM est une (norme) interface qui permet de manipuler les éléments de la page web.
    * Element: Objet représentant un élément de la page web
    * Attribut: Propriété d'un élément
    * Event: Événement déclenché par un élément
    
## Accès asynchrone aux données

> Réaliser par des requêtes HTTP déclenchées depuis le code JavaScript

**Les API de requetes HTTP**

* fecth
* XMLHttpRequest

## Architecture (fonctionnement du navigateur)

*   Le code HTML et CSS est traire le moteur de rendu.
*   Le code JavaScript est exécuté par le moteur JavaScript.
    * Le code Javascript permet l'accès au différents API
        * DOM : document
        * ....
        * https://caniuse.com/

## Cycle de vie  d'une page

    * Chargement - Event : DOMContentLoaded
    * Rendu
    * Affichage - Event : load

## Analyse d'une page

* Outils : Web Developer
    * Onglet : Inspecteur
    * Outils : Network
    * Outils : Console
    * Outils : Lighthouse

## Développement  JavaScript

* Ecrire des fonctions pour structurer le code
* Utiliser le mot clés `debugger`
* Mieux utiliser l'objet `console`
    * `console.groupCollapsed` et `console.groupEnd`
    * `console.time` et `console.timeEnd`
    * `console.log`
    * `console.warn`
    * `console.error`
    * `console.trace`

## Best  Pratices

* Ne pas laisser les console.log
* Insérer les script en fin de document
        * A défaut utiliser l'attribut "defer"
* Temps de chargement inital 2 secondes
* Sctructurer le code en fonction
* Meilleur relecture
* Meilleur débuggage
* Essayer de maintenir le temps pris par le sfonction sous les 17ms


## Librairies JavaScript

> Ensemble de fonctions JavaScript facilitant la programmation.

* jQuery - Librairie de Manipulation du DOM avec quelque sutilitaires.
* Axios - Librairie de requêtes HTTP.

## Language JavaScript

* ECMAScript - Standardisation de la programmation.
* ES5 - Ecriture de code compatible avec les navigateurs en 2009.
* ES6/2015 - Ecriture de code plus concise.

## Différence majeure entre ES5 et ES6

* Déclaration des identifiants : utiliser `let/const` plutot que `var`
* Introduction des fonction fléchées : utiliser `=>` autant que `function`


# jQuery

Importable depuis le CDN jQuery.

> Librairie de Manipulation du DOM avec quelque sutilitaires.
    * Facilite la manipulation du DOM

> Attention a bien structurer le code.

```js

$(()=> alert('start')) // Fonction passée en paramaètre : code à exécuter au chargement de la page
// JS Natif - window.onload = ()=> alert('start')

$('#id') // Selector CSS : Selectionner un élément correpondant au selecteur
// JS Natif - document.getElementByid('id')

$('div') // Selectionner tous les éléments de type div
$('main>footer>div>button') // Selectionner tous les éléments correpondant au selecteur
// JS Natif - document.querySelectorAll('main>footer>div>button')

$('<button>') // Code HTML :  Création d'un élément
// JS Natif - document.createElement('button')

```

```