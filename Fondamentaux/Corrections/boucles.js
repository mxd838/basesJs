// 1 -- avec une boucle for
for(let i = 1; i < 11; i++){ // possibilité de déclarer et d'initialiser la variable i dans la structure du for
    console.log(i)
} 

// -- avec une boucle while
let j = 1
while (j < 11){
    console.log(j)
    j++
}


// 2
const message = 'Hello World'
for(let k = 0; k < message.length; k++){
    console.log(message[k])
}


// 3
for (let l = 0; l <= 15; l++){
    if (l % 2 === 0){
        console.log(l + ' est pair.')
    } else {
        console.log(l + ' est impair')
    }
}

// 4
let m = 1
while (m <= 100){
    if(m % 5 === 0 && m % 3 === 0){
        console.log('FizzBuzz')
    } else if (m % 3 === 0){
        console.log('Fizz')
    } else if (m % 5 === 0){
        console.log('Buzz')
    } else {
        console.log(m)
    }
    m++
}

// 5
let n = 1
let somme = 0
while (n < 101){
    if (n % 3 === 0 || n % 5 === 0){
        somme += n
    }
    n++
}
console.log(somme)