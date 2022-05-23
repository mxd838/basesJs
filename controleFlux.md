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
## Switch
## Les valeurs *truthy* et *falsy*
## Exercices