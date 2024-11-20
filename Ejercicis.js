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

