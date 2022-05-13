/**
 * Commentaire d'entête
 * Le but est de décrire le propos global du fichier courant.  
 * 
 * Revenir sur la syntaxe des fonctions 
 * en et des déclarations en JavaScript 
 * en différenciant ES5 et ES6  
 * 
 * Le vrai nom de JavaScript est EcmaScript (ECMA-262)
 * 
 * ES5 - Sortie en 2009
 * 
 * ES6/2015 - Sortie en 2015
 * 
 * Le choix de syntaxe d'un projet dépend du niveau de support du navigateur cible.
 * 
 * https://kangax.github.io/compat-table
*/

// ES5 var 

// ES5
function fnA(){}
var fnAA = function (){};

// ES6 let const

// ES6
const fnB = () => {};

//-----------------------------------------------------

// ES6 valeur de paramètre par défaut
function fnC1( val = ''){}
const fnC2 = ( val = '') => {}

//-----------------------------------------------------

// ES6 et ES5 : Objet fonction et référence

function Log( str ){
    console.log( str );
    return str;
}

var lg1 = Log('Hello'); // Stockage dans une variable de la vlaeur de retour
var lg2 = Log; // Stockage dans une variable de la référence de la fonction

lg2('Hello World'); // Appel de la fonction