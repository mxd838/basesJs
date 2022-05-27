## Présentation
- Une structure de contrôle de flux, ou structure de contrôle conditionnel : 
    - évalue une valeur ou une condition qu'on lui envoie
    - permet de faire des traitements en fonction de cette évaluation
- La structure **if/else if/else** :
    -  évalue une condition ou une valeur (un booléen) qui doit renvoyer *true* ou *false*
    - exécute au maximum un bloc d'instructions (celui pour lequel la condition indiquée est remplie) et zéro autrement
- Le **switch** évalue les différentes valeurs possibles d'une variable
## If - Else if - Else
### Modèle
```javascript
let age = 18
if (age < 18){
    console.log('Alcool non autorisé')
} else if (age === 18){
    console.log('Tout juste gringo')
} else {
    console.log('Votre bouteille vous attend')
}
```
> Ici, la valeur de la variable age est examinée une première fois dans le if, entre parenthèses\
>  - age étant égal à 18, la première condition examinée renvoit false\
>  - le bloc d'instructions qui suit, entre les accolades, n'est donc pas exécuté\

> Le bloc suivant, après le 'else if' est exécuté puisque la valeur de la variable remplit la condition :\
> - 'age === 18' équivaut bien à 'true'\

> Le dernier bloc, correspondant au 'else' est ignoré
### Explications complémentaires
- La version minimale de cette structure conditionnelle est 
```javascript
if (condition){
    //instructions
}
```
- On rajoute un bloc else if si on souhaite examiner une autre condition
- Et / ou un bloc else si on veut prévoir toutes les situations qui ne répondent pas aux conditions précédentes


## Switch
```javascript
let nombreDAssiettes
switch(nombreDAssiettes){
    case 1:
        console.log('Ô solitude, ma si fidèle compagne -snif-')
        break
    case 2:
        console.log('Tiens, serais-je en couple ?')
        break
    case 3:
        console.log("Ah, j'ai un gamin maintenant")
        break
    case 4:
        console.log("Euh...ça commence à faire du monde")
        break
    default:
        console.log("Ne venez pas manger ici, svp")
}
```
> *nombreDAssiettes* : la variable dont les valeurs sont examinées\
> *case 1/2/3/etc* : les différentes valeurs envisagées de la variable, suivi des instructions qui s'exécutent si la variable a la valeur indiquée\
> *default* : mot-clé suivi des instructions qui s'exécutent si aucune des valeurs précédentes n'a été rencontrée
> *break* : mot-clé nécessaire pour la sortie du switch après l'exécution des instructions associées au case correspondant

## Les conditions

**Principes généraux**

- On retrouve les conditions dans les boucles et les contrôles de flux (l'expression entre parenthèses avant d'entrer dans le bloc d'instructions, qui lui est reconnaissable grâce aux accolades)
- Une condition est toujours évaluée :
    -  soit à *true* -> la condition est respectée ; JavaScript exécute alors le bloc d'instructions qui suit
    - soit à *false* -> la condition n'est pas respectée ; le bloc d'instructions qui suit n'est pas exécuté

**Opérateurs de comparaison :**
> a == b\
> a < b\
> a > b\
> a <= b *(inférieur ou égal)*\
> a >= b\
> a != b *(différent de )*\


**Opérateurs de comparaison stricts**
```javascript
if ( 3 == '3'){
    console.log('What ?')
}
```
> Ici, la condition est évaluée à *true* alors qu'on compare un nombre à une chaîne de caractères : on aura bien le message dans la console.\
> -> JavaScript compare les valeurs sans se préoccuper de leurs types respectifs.\
> -> Pour cette raison, on utilise les opérateurs d'égalité et d'inégalité stricts pour comparer simultanément la valeur et le type : respectivement === et !==
```javascript
if (3 === '3'){
    console.log("Cette ligne ne s'affichera pas.")
}
```
```javascript
if (3 !== '3'){
    console.log("Les types ne sont pas les mêmes donc cette ligne s'affichera.")
}
```
**Opérateurs logiques : &&, || et !**
***&& : ET***
```javascript
let titre = 'Comte'
let nom = 'de Valjolimont'
if (titre === 'Comte' && nom === 'de Valjolimont'){
    console.log("Bien le bonjour, Comte de Valjolimont")
}
```
- L'opérateur && permet d'évaluer deux conditions a et b simultanément selon les règles suivantes :
    - si a === true ET b === true -> *a && b* renvoie *true*
    - si a === true ET b === false -> *a && b* renvoie *false*
    - si a === false ET b === true -> *a && b* renvoie *false*
    - si a === false ET b === false -> *a && b* renvoie *false*
- Ainsi : a && b renvoie *true* uniquement si a et b renvoient chacune *true*, et *false* dans les autres cas.

***|| : OU***
```javascript
let nombre1 = 3
let nombre2 = 93
if (nombre1 < 3 || nombre2 > 93){
    console.log("Vous aurez peut-être besoin d'une couche")
}
```
- L'opérateur || permet d'évaluer deux conditions a et b simultanément selon les règles suivantes :
    - si a === true OU b === true -> *a || b* renvoie *true*
    - si a === true OU b === false -> *a || b* renvoie *true*
    - si a === false OU b === true -> *a || b* renvoie *true*
    - si a === false OU b === false -> *a || b* renvoie *false*
- Ainsi : a || b renvoie *true* si une des deux conditions a ou b renvoie *true* ; elle renvoie *false* uniquement si les deux conditions a et sont évaluées à *false*

***! : CONTRAIRE DE***
```javascript
let mineur = true
if (!mineur){
    console.log('BOIS!BOIS!BOIS!)
}
```
- L'opérateur ! renvoie l'inverse du booléen auquel il est associé:
    - si bool === true alors !bool renvoie *false*
    - si bool === false alors !bool renvoie *true*
