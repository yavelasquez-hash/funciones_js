


// Ejercicio 1 ......................
const prompt = require('prompt-sync')();

const number = parseInt(prompt("Ingrese un numero: "));

if (number > 0) {
    console.log("El numero es positivo");
    return;
} 
if (number < 0) {
    console.log("El numero es negativo");
    return;
} 
console.log("El numero es cero")

// Ejercicio 2

// for (let i = 1; i<= 20; i++) {
//     console.log(`Numero: ${i} `);
// }

// Ejercicio 3 ............................

// let num = parseInt(prompt("Ingrese un numero para ver su tabla: "));

// for (let i = 1; i<=10; i++) {
//     console.log(num + " x " + i + " = "  + (num * i));
// }

// Ejercicio 4 ........................

// let contador = 0;

// for (let i = 1; i<=50; i++) {
//     if (i % 2 == 0) {
//         contador++;
//     }
// }

// console.log("Cantidad de numeros pares entre 1 y 50: " + contador);

// Ejercicio 5 ..........................

// let contraseñaCorrecta = "1234";
// let intento;
// let acceso = false;

// for (let i = 1; i <=3; i++) {
//     intento = prompt("Ingresa la contraseña (Intento" + i + " de 3):");

//     if (intento === contraseñaCorrecta) {
//         console.log("Acceso Concedido");
//         acceso = true;
//         break;
//     } else {
//         console.log("Contraseña Incorrecta");
//     }
//  }

// if (!acceso) {
//     console.log("Acceso Bloqueado. Has agotado los 3 intetos");
// }


// const age =20;

// Forma moderna
//if (age >= 15) {
    
//console.log("Eres un adulto.");
    //return;
//}

// console.log("Tu eres menor de edad.");


// const prompt = require('prompt-sync')();

// const age = prompt("Ingresa tu edad: ");

// Forma Clasica
/* if (age >= 60) {
    console.log("Eres un adulto mayor.");
    return;
}

if (age >= 30) {
    console.log("Eres un adulto");
    return;
}

if (age < 18) {
    console.log("Eres menor de edad");
    return;
}

console.log("adulto joven"); */

// Ciclo For