// Ejercicio 1
console.log("=====Ejercicio 1=====")

var multiplo = 21;

if (multiplo % 7 == 0) {
    console.log(multiplo + " es multiplo de 7")
}
if (multiplo % 3 == 0) {
    console.log(multiplo + " es multiplo de 3")
}else {
    console.log("No es multiplo de ninguno")
}

// Ejercicio 2
console.log("=====Ejercicio 2=====")

let x = 20;
let y = 55;

let ternaria = x >= 10 && x <= 50 ? x + " está entre 10 y 50" : x + " no está entre 10 y 50"
console.log(ternaria)

let ternaria2 = y >= 10 && y <= 50 ? y + " está entre 10 y 50" : y + " no está entre 10 y 50"
console.log(ternaria2)

// Ejercicio 3
console.log("=====Ejercicio 3=====")

let nota = 3;

if (nota <= 10 && nota >= 9) {
    console.log("Excel·lent")
}

if (nota <= 8.99 && nota >= 7) {
    console.log("Notable")
}

if (nota <= 6.99 && nota >= 6) {
    console.log("Bé")
}

if (nota <= 5.99 && nota >= 5) {
    console.log("Suficient")
}

if (nota <= 4.99 && nota >= 0) {
    console.log("Suspès")
}

// Ejercicio 4
console.log("=====Ejercicio 4=====")

let multiploEj1 = 21;

switch (multiploEj1) {

    case 50: multiploEj1 % 7 == 0
}

