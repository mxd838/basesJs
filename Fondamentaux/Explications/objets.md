## Présentation
- Les variables de type Object, ou variables objet permettent de stocker plusieurs valeurs à la fois 
- On peut le créer en le remplissant ou non de valeurs
- Contrairement à un tableau ou chaque valeur est associée à un numéro d'index, chaque valeur d'un objet est associée à une clé
## Création
```javascript
// Création d'un objet vide
const monObjet = {}
// Création d'un objet déjà rempli
const monAutreObjet = {nom: 'Robert', prenom: 'Gerard'}
// On le verra souvent présenté de la façon suivante :
const idJoueur1 = {
    pseudo: 'DarkNaruto666',
    scoreMoyen: 'minable',
    meilleurScore: 2
}
```
## Accès aux valeurs d'un objet
```javascript
console.log(idJoueur1.pseudo)
// ou
console.log(idJoueur1['pseudo'])
```

