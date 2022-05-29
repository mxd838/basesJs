## Présentation
- Une fonction est  un ensemble d'instructions (délimité par des accolades) effectuant une tâche ou calculant une valeur. 
- Afin d'utiliser une fonction, il est nécessaire de l'avoir auparavant définie.
- Elle permet d'isoler des portions de code pour le rendre plus facile à concevoir, lire, débugger, etc.
## Modèles
**Syntaxe de la définition d'une fonction**
- Deux syntaxes sont possibles pour définir une fonction : la forme classique ou la *arrow function* (fonction fléchée), apparue dans une version plus récente de JavaScript
```javascript
// Forme classique
function SayHello(){
    console.log('Hello')
}
// Version 'arrow function'
const  sayHelloAgain = () => {
    console.log('Hello. Again.')
}
```
**Appel d'une fonction**
```javascript
sayHello()
sayHelloAgain()
```
- Ces fonctions affichent directement un message dans la console
- Mais la plupart du temps, les fonctions effectuent un traitement sur les données et renvoient le résultat
- Pour cela, on retourne (ou on renvoie) une valeur

**Valeur de retour**
- Il est possible de renvoyer une valeur en utilisant le mot-clé *return*
- Cela permet, par exemple, d'affecter une valeur directement en appelant une fonction
```javascript
function addMyTwoNumbers(){
    let sum = 10 + 32
    return sum
}
const reponseALaVie = addMyTwoNUmbers()
console.log(reponseALaVie) // affichera bien 42
```
**Paramètres et arguments**
- Avec ce qui vient d'être présenté, on ne peut faire de traitement que sur des données qui sont disponibles à l'intérieur du bloc d'instructions de la fonction
- Pour utiliser des variables définies en dehors des fonctions, il faut :
    - indiquer lors de la définition que la fonction va recevoir des données (c-est-à-dire ajouter des *paramètres*);
    - appeler la fonction en spécifiant le nombre de données adéquat, qu'il s'agisse de variables ou directement de valeurs (on appelle la fonction en spécifiant les *arguments* qu'elle doit traiter).
- Le nombre d'arguments doit correspondre au nombre de paramètres indiqués au moment de la définition de la fonction.
```javascript
const addThreeNumbers = (nb1, nb2, nb3) => {
    return nb1 + nb2 + nb3
}
// La fonction renvoie une valeur mais n'affiche rien
// On peut affecter le renvoi de la fonction à une variable
let result = addThreeNumbers(12, 28, 489)
console.log(result)
// Ou inscrire directement la fonction comme argument d'un console.log
console.log(addThreeNumbers(4343,4534, 353))

const joliPrenom = 'Gertrude'

const direBonjour = (prenom) => {
    return ('Bonjour ' + prenom + '!')
}

const salutation = direBonjour(joliPrenom)
console.log(salutation)
```


