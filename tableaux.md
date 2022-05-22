## Présentation
- Les variables de type Array, ou variables tableaux permettent de stocker plusieurs valeurs à la fois 
- On peut le créer en le remplissant ou non de valeurs
```javascript
const monTableau = [] // création d'un tableau vide
const autreTableau = [1, 2, 3, 4] // création d'un tableau avec des valeurs
```
- Ces valeurs peuvent être de toute sorte (nombres, chaînes de caractères, booléens, tableaux, objets)
```javascript
const stringAndNumbersArray = [1, 'cheval', 3.49, 'lampadaire', 38, 'robert']
const tableauComplexe = [[1, 2, 3], {nom: 'Michel', prenom: 'Gerard'}, 3.98]
// ici le tableau contient un autre tableau, un objet et un nombre
```
- Il n'y a pas de limite au nombre d'éléments dans un tableau ou au nombre de niveaux d'imbrication
## Accès aux éléments d'un tableau
### Les indices (*index*)
- À chaque valeur du tableau est associée un indice (ou *index*) qui permet l'accès à cette valeur
- L'index démarre à zéro. Ainsi :
```javascript
stringAndNumbersArray = [128, 'cheval', 3.49, 'lampadaire', 38, 'robert']
```
> index 0: 128
> index 1 : 'cheval'
> index 2 : 3.49
> index 3 : 'lampadaire'
- Pour pouvoir afficher une valeur en particulier, on utilise la syntaxe suivante :
> nomDuTableau[indice]
- Ainsi pour afficher dans la console des valeurs du tableau *stringAndNumbersArray* :
```javascript
console.log(stringAndNumbersArray[0]) // affiche 128
console.log(stringAndNumbersArray[4]) // affiche 38
```
### Propriété *.length*
- Un tableau intègre une propriété .length qui permet d'obtenir sa longueur
```javascript
console.log(monTableau.length) // 0
console.log(autreTableau.length) // 4
console.log(tableauComplexe.length) // 3
```
### Parcourir un tableau à l'aide d'une boucle
- L'utilisation des indices et de la propriété length permet de parcourir simplement un tableau
```javascript
let i = 0 
while (i < monTableau.length){
    // à chaque passage de boucle est affichée une valeur du tableau
    console.log(monTableau[i])
    i++
}