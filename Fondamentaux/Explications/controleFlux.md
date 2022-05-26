## Présentation
- Une structure de contrôle de flux, ou structure de contrôle conditionnel : 
    - évalue une valeur ou une condition qu'on lui envoie
    - permet de faire des traitements en fonction de cette évaluation
- La structure if/else if/else et l'opérateur ternaire évaluent une condition ou une valeur (un booléen) qui doit renvoyer *true* ou *false*
- Le switch évalue les différentes valeurs possibles d'une variable
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
> Ici, la valeur de la variable age est examinée une première fois dans le if, entre parenthèses
>  - age étant égal à 18, la première condition examinée renvoit false
>  - le bloc d'instructions qui suit, entre les accolades, n'est donc pas exécuté

> Le bloc suivant, après le 'else if' est exécuté puisque la valeur de la variable remplit la condition :
> - 'age === 18' équivaut bien à 'true'

> Le dernier bloc est ignoré
### Explications complémentaires
- La version minimale de cette structure conditionnelle est 
```javascript
if (condition){
    //instructions
}
```
- On rajoute un bloc else if si on souhaite examiner une autre condition
- Et / ou un bloc else si on veut prévoir toutes les situations qui ne répondent pas aux conditions précédentes
- L'ordre des conditions importe :
    - dans l'exemple du modèle,
## Opérateur ternaire
### Modèle
```javascript
let reponse = 'choux de bruxelles'
const decision = reponse === 'choux de bruxelles' ? 'Non, merci ça va aller' : 'Bon, on graille quoi du coup ?'
```
> 'reponse === 'choux de bruxelles' : condition évaluée
> '?' : syntaxe indiquant la fin de l'évaluation de la condition
> 'Non, merci ça va aller' : valeur renvoyée par l'opérateur ternaire si la condition est évaluée à true
> ':' syntaxe séparant les deux possibilités de valeurs renvoyées par le ternaire
> 'Bon, on graille quoi du coup ?' : valeur renvoyée par l'opérateur ternaire si la condition est évaluée à false
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
## Les valeurs *truthy* et *falsy*
## Exercices