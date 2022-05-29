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
- L'utilisation des guillemets ou des apostrophes n'a pas d'importance, tant que le symbole ouvrant la chaîne soit le même que celui la fermant
- Si on souhaite utiliser des apostrophes dans la chaîne, on utilisera des guillemets pour la délimiter, et inversement
```javascript
const monMessage = "J'ai une Fiat 500 à vendre. Ne ratez pas l'occas'"
```
#### Concaténation de chaînes de caractères
- Cela consiste à fusionner deux chaînes de caractères pour n'en faire qu'une
```javascript
const suiteMessage = ". Ou pas."
const messageComplet = monMessage + suiteMessage + "Suite de mots pour l'exemple. Je manque d'inspiration."
console.log(messageComplet)
```
- Le typage dynamique de JavaScript permet de concaténer une chaîne de caractères avec un nombre
```javascript
const nombreDePetitsCochons = 3
const phrase = "Nombre de petits cochons : " + nombreDePetitsCochons
console.log(phrase)
console.log(typeof phrase )
```
#### Obtenir la longueur d'une chaîne de caractères
```javascript
// maVariable.length ou "chaineBrute".length
console.log(phrase.length)
```
#### Accéder à un élément d'une chaîne de caractères
- À la manière d'un tableau, on peut accéder à un élément de la chaîne en indiquant son index
```javascript
console.log(phrase[0]) // 'N'
console.log(phrase[phrase.length - 1]) // Dernier caractère : '3'
```
- Toutefois, contrairement à un tableau, on ne peut pas modifier un élément de la chaîne directement (*cf Bases - Tableaux et JavaScript Avancé*)

#### Méthodes de chaînes de caractères
- Il existe toutes sortes de méthodes permettant de manipuler les chaînes de caractères ([à voir ici, par exemple](https://www.w3schools.com/js/js_string_methods.asp))
- En guise d'exemple, pour extraire une partie d'une chaîne de caractères :
```javascript
const boutDePhrase = phrase.substring(10, 15)  
console.log(boutDePhrase) // petit
```
### Booléens (*true* ou *false*)
- Un booléen n'a que deux valeurs possibles : *true* ou *false*
- Les conditions qui sont utilisées dans les structures de contrôle de flux et les boucles renvoient un booléen
- Si la condition renvoie *true*, le bloc d'instructions correspondant s'exécute
- Si elle renvoie *false*, le bloc ne s'exécute pas
- *cf les explications sur les boucles et le contrôle de flux pour des exemples*

### Autres types de valeurs possibles
- L'idée ici est de présenter quelques-uns des types de valeur possibles qu'on retrouvera le plus souvent dans des erreurs lorsqu'on débute
- Il est également possible de les manipuler mais leur utilisation est relativement limitée, en particulier dans le cadre de ces explications

**undefined**
- On la retrouve pour une variable auquelle aucune valeur n'a été affectée
```javascript
let a
console.log(a) // undefined
```

**NULL**
- Même sens que pour undefined, la différence tient à l'origine du type (*cf Avancé*)

**Infinity**
- Ce type peut se rencontrer lorsqu'on essaie de diviser par zéro

**NaN**
- 'Not a Number' : on le rencontre lorsqu'on manipule des nombres (via une fonction, une méthode mathématique) et que le résultat ne peut pas renvoyer un nombre
```javascript
// En essayant d'obtenir la racine carrée de -37
 Math. sqrt(-37) // renvoie NaN
 ```

## Portée des variables
- Les variables définies à l'intérieur de blocs d'instructions (*if*, *while*, fonctions, etc) ne sont pas accessibles en dehors de ces blocs
```javascript
for(let i = 0; i < 3; i++){
    const bou = 'bouh'
    console.log(bou)
}
console.log(bou) // -> renvoie une erreur
```
- Il y a des subtilités à cette règle, qui ne me paraissent pas essentielles à ce stade (*cf Avancé*)



