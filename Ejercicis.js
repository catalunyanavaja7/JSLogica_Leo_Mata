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

// Ejercicio 6
console.log("=====Ejercicio 6=====")

const string = "abc12def34ghi56";
const numeros = string.match(/\d+/g);
const suma = numeros
    ? numeros.map(Number).reduce((acc, num) => acc + num, 0)
    : 0;

console.log(`La suma de los números es: ${suma}`);

// Ejercicio 7
console.log("=====Ejercicio 7=====")

const num1 = 15;
const num2 = 8;
const num3 = 23;

let menor, medio, mayor;

if (num1 <= num2 && num1 <= num3) {
    menor = num1;
    if (num2 <= num3) {
        medio = num2;
        mayor = num3;
    } else {
        medio = num3;
        mayor = num2;
    }
} else if (num2 <= num1 && num2 <= num3) {
    menor = num2;
    if (num1 <= num3) {
        medio = num1;
        mayor = num3;
    } else {
        medio = num3;
        mayor = num1;
    }
} else {
    menor = num3;
    if (num1 <= num2) {
        medio = num1;
        mayor = num2;
    } else {
        medio = num2;
        mayor = num1;
    }
}

console.log(`Números ordenados: ${menor}, ${medio}, ${mayor}`);

// Ejercicio 8
console.log("=====Ejercicio 8=====")

