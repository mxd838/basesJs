## Présentation
- Une boucle est une série d'instructions répétée un certain nombre de fois
- Les instructions sont les opérations qui sont inscrites entre les accolades (le bloc d'instructions)
- Le nombre de répétitions, ou nombre de passages dans la boucle, est déterminé par l'évaluation d'une condition à chaque passage de boucle.

## For
```javascript
let i  // itérateur, variable dont la valeur est modifiée à chaque passage de boucle
for (i = 0; i < 5; i++){ 
    // bloc d'instructions
}
```
> for : mot-clé déclaratif de la boucle\
> i = 0 : initialisation de la variable i à 0 (donc sa valeur au premier passage de la boucle)\
> i < 5 : condition d'arrêt de la boucle ; si i arrive à 5, le bloc d'instructions ne s'exécute pas\
> i++ :\
    - la valeur d'incrémentation de la variable i (ici, i augmente de 1 à chaque passage de boucle, avant d'être de nouveau évalué)\
    - le changement de la valeur peut s'écrire de différentes façons (voir exemples du point suivant)\
    - l'itérateur peut augmenter de 1 à chaque passage (i++, i = i +1, i += 1), diminuer de 1 (i-- ou i = i -1), augmenter de 2 (i = i +2, i += 2 ), être multiplié (i = i * 2), divisé, etc

## While
```javascript
let j = 0
while (j < 38){
    // bloc d'instructions
    j = j + 2 // incrémentation (ici, les valeurs successives de la variable seront 0, 2, 4, 6 ... jusqu'à 36)
}
```
> while : mot-clé déclaratif de la boucle\
> j < 38 : condition de passage dans la boucle\
> *Attention* :\
    - la boucle *while* n'intègre pas l'incrémentation dans sa syntaxe, contrairement à la boucle *for*\
    - si la variable évaluée dans la condition ne change pas (c'est-à-dire si l'évaluation de la condition renvoie toujous *true*), on entre dans une boucle infinie : JavaScript ne sortira jamais de la boucle

## Rappel sur les conditions

**Principes généraux**

- On retrouve les conditions dans les boucles et les contrôles de flux (l'expression entre parenthèses avant d'entrer dans le bloc d'instructions, qui lui est reconnaissable grâce aux accolades)
- Une condition est toujours évaluée :
    -  soit à *true* -> la condition est respectée ; JavaScript exécute alors le bloc d'instructions qui suit
    - soit à *false* -> la condition n'est pas respectée ; le bloc d'instructions qui suit n'est pas exécuté

**Opérateurs de comparaison :**
> a == b 
> a < b
> a > b
> a <= b *(inférieur ou égal)*
> a >= b
> a != b *(différent de )*


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
