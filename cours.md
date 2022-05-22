# JavaScript
## Sommaire
### Bases
* [Préalable](#info)
* [Variables et opérateurs](#varOp)
    * [Présentation](#varPresent)
    * [Nombres](#numbers)
    * [Opérateurs mathématiques](#numbersOp)
    * [Chaînes de caractères (*string*)](#string)
    * [Conversion](#conversion)
    * [Méthodes et propriétés courantes](#strMeth)
    * [Booléens: true, false](#booleans)
    * [Opérateurs de comparaison: <, >, ==, !=](#comparisonOps)
    * [Opérateurs logiques: !, &&, ||](#logicOperators)
    * [Exercices](#varOpEx)
* [Contrôle de flux](#conditionals)
    * [Présentation](#conditionalsPresent)
    * [If - else if - else](#if)
    * [Switch](#switch)
    * [Opérateur ternaire](#ternary)
    * [Exercices](#conditionalsEx)
* [Boucles](#loops)
    * [Présentation](#loopsPresent)
    * [For](#for)
    * [While](#while)
    * [Exercices](#loopsEx)
* [Fonctions](#func)
    * [Présentation](#functionsPresent)
    * [Déclaration](#decFunc)
    * [Appel](#callFunc)
    * [Paramètres et arguments](#paramsArgs)
    * [Fonction et méthode](#funcMeth)
    * [Exercices](#funcEx)
* [Tableaux (*arrays*)](#arrays)
    * [Présentation](#arraysPresent)
    * [Les index](#arraysIndex)
    * [Méthodes et propriétés courantes](#arrMeth)
    * [Conversions](#arraysConvert)
    * [Exercices](#arraysEx)
* [Les objets](#objects)
    * [Présentation](#objectsPresent)
    * [Accès aux clés et valeurs](#objAccess)
    * [Méthodes et propriétés courantes](#objMeth)
    * [Conversions](#objConvert)
    * [Exercices](#objEx)


### Manipulation du DOM
### JavaScript avancé



## Préalable
- les exercices utiliseront la commande *console.log()*
- il est possible de l'utiliser directement dans la console du navigateur (F12 - onglet 'console') ou en écrivant le code dans un fichier JavaScript lié au fichier Html (balise à placer juste avant la balise fermante du body )

```html
<body>
    <!-- ... -->
<script src='chemin_du_fichier.js'></script> 
</body>
```
## Variables
### Présentation
```javascript
const exemple = 'biscuit'
```
> const : mot-clé indiquant la déclaration\
> exemple : nom de la variable\
> = : opérateur d'affectation, place la valeur dans la variable (ne pas confondre avec une égalité)\
> 'biscuit' : valeur de la variable, ici une chaîne de caractères (ou *string*)
- **déclaration** : 
    - création de la variable, la 'boîte' dans laquelle on va ranger une valeur (nombre, chaîne de caractères, etc) 
    - une variable ne se déclare qu'une fois
    - deux mots-clés possibles pour déclarer une variable : *let* ou *const*
- **affectation** : 
    - on attribue une valeur à la variable (on la 'range' dans la boîte)
```javascript
const monNombre = 3         
const monString = 'violet' // chaîne de caractères : se place entre  des '' ou  des ""
let reponse = 42
let age
```
- const:
    - il est obligatoire d'attribuer une valeur lors de la déclaration
    - pas de changement de la valeur par la suite
- let: 
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

### Exercices

# Manipulation du DOM
# JavaScript avancé