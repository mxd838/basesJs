## Généralités
### Modèle
```javascript
const exemple = 'biscuit'
```
> const : mot-clé indiquant la déclaration\
> exemple : nom de la variable\
> = : opérateur d'affectation, place la valeur dans la variable (ne pas confondre avec une égalité)\
> 'biscuit' : valeur de la variable, ici une chaîne de caractères (ou *string*)
### Déclaration
- création de la variable, la 'boîte' dans laquelle on va ranger une valeur (nombre, chaîne de caractères, etc) 
- une variable ne se déclare qu'une fois
- deux mots-clés possibles pour déclarer une variable : *let* ou *const*
### Affectation
- on attribue une valeur à la variable (on la 'range' dans la boîte)
```javascript
const monNombre = 3         
const monString = 'violet' // chaîne de caractères : se place entre  des '' ou  des ""
let reponse = 42
let age
```
> à droite du signe d'affectation, valeur ou expression renvoyant une valeur
### Const
- il est obligatoire d'attribuer une valeur lors de la déclaration
- pas de changement de la valeur par la suite
### Let: 
- la déclaration sans affectation de valeur est possible
- la valeur de la variable peut être changée
```javascript
let a
console.log(a)
```
>  undefined
```javascript
a = 42
console.log(a)
```
> 42

## Nommage des variables
- pas d'utilisation des mots-clés du langage (*var, for, let, while, Array, object, etc*)
- pas d'espaces ou de caractères spéciaux
- pas de chiffres pour le premier caractère
- les majuscules pour le 1er caractère sont réservées, par convention, à des objets particuliers (cf *JavaScript Avancé*)
- pour les noms de variables constitués de plusieurs mots, 2 conventions de nommage répandues :
    - *camelCase* : chaque mot suivant le premier est signalé par une majuscule;
    - *snake_case* : chaque mot est séparé par un underscore.
## Valeurs
### vérifier le type d'une variable ou d'une valeur
```javascript
// typeof + variable ou valeur
console.log(typeof 42)
const politesse = 'Bonjour'
console.log(typeof politesse)
```
### Les différents types en JavaScript
- On distingue les valeurs primitives des objets 
- Les valeurs primitives :
    - on y trouve les booléens, les nombres, les chaînes de caractère (*string*)
    - on y range également *undefined*, *NULL*, *Infinity* et *NaN*
- Les objets représentent des structures de données définis par un ensemble de propriétés 
- Parmi ceux-ci :
    - les tableaux ou *arrays*, qui associent un index (de 0 à la longueur du tableau - 1) à chacune des données qui y est contenue
    - les objets "normaux", où chaque donnée est associée à une clé
- Attention donc à la confusion entre la catégorie d'objet et une de ses implémentations, l'objet 'normal' : c'est ce dernier qui est examiné dans cette partie de cours

### Nombres
- On remplace la virgule par le point pour écrire un nombre qui a une partie décimale
```javascript
let nombreDecimal = 12.48
```
### Opérateurs mathématiques
- opérateurs classiques : +, -, *, /
- % :
    - modulo
    - renvoie le reste d'une division
```javascript
// tests possibles directement dans la console du navigateur
12 % 3
// affiche 0, pas de reste
13 % 3
// affiche 1 puisque 13 =  3 x 4 + 1
```
- opérateurs d'incrémentation :
    - ils permettent d'opérer simultanément une modification de la valeur et une réaffectation dans la variable
    - pour ajouter ou retirer un, il existe une écriture encore plus brève, principalement utilisée dans les boucles
```javascript
let somme = 1200
somme = somme + 12 // Écriture 'classique'
// JavaScript regarde ce qu'il y a droite du signe d'affectation, fait le calcul et réaffecte le résultat à gauche du signe d'affectation
somme += 12 // écriture raccourcie de la version classique
somme /= 2 // Cette écriture est valide pour les autres opérateurs
somme *= 3
somme++ // Il doit se passer quelque chose d'inattendu..
somme-- // cf la partie 'Avancé'
```
### Chaînes de caractères (*string*)
#### Présentation
- les *string* sont des chaînes de caractères, identifiables aux guillemets ou apostrophes qui les entourent ("" ou '')
- L'utilisation des guillemets ou des apostrophes n'a pas d'importance, tant que le symbole ouvrant la chaîne soit le même que celui le fermant
- Si on souhaite utiliser des apostrophes dans la chaîne, on utilisera des guillemets pour la délimiter, et inversement
```javascript
const monMessage = "J'ai une Fiat 500 à vendre. Ne ratez pas l'occas'"
```
#### Concaténation de chaînes de caractères
- longueur d'une chaîne de caractère
- accès à un élément d'une chaîne de caractères
- concaténation de chaînes de caractères
### Booléens (*true* ou *false*)

### Autres valeurs possibles
#### undefined
#### null
#### infinite

## Portée des variables

