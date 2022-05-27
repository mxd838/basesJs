## Préalable
- les exercices utiliseront la commande *console.log()*
- il est possible de l'utiliser directement dans la console du navigateur (F12 - onglet 'console') ou en écrivant le code dans un fichier JavaScript lié au fichier Html (balise à placer juste avant la balise fermante du body )

```html
<body>
    <!-- ... -->
<script src='chemin_du_fichier.js'></script> 
</body>
```
## Déclaration et affectation
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
### Les caractères et mots interdits
### Les conventions
## Valeurs
### Nombres
### Opérateurs mathématiques
### Chaînes de caractères (*string*)
### Booléens (*true* ou *false*)

### Autres valeurs possibles
#### undefined
#### null
#### infinite

