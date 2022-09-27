"use strict";
// //Basics =====================================================================
// var respuestaSuma;
// function Suma(a, b) {
//   let resultado = a + b;
//   return resultado;
// }

// respuestaSuma = Suma(5, 20);

// console.log(" ");
// console.log("========= Functions ==========");
// console.log(respuestaSuma);

// //Example
// //Calucalr la edad de una persona:
// console.log("--Age Calculator--");

// function AgeCalculator(date) {
//   let respuesta = 2022 - date;
//   return respuesta;
// }

// var age = AgeCalculator(1992);
// console.log(age);

// switch (age) {
//   case 30:
//     console.log("Eres un adulto");
//     break;

//   case 23:
//     console.log("Estas Joven");
//     break;

//   default:
//     console.log("Fecha no valida");
// }

// // Function Declarations vs. Expressions ==============================================

// // Function declaration
// // estas pueden ser declaradas despues o abajo
// function calcAge1(birthYeah) {
//     return 2037 - birthYeah;
//   }
//   const age1 = calcAge1(1991);
  
//   // Function expression
//   // estas no pueden ser declaradas despues o abajo.
//   const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah;
//   }
//   const age2 = calcAge2(1991);



//   //Arrow Function ========================================
//   console.log("-- Arrow Function --")

//   var numero = 9;

// //Modo Corto | En este codigo toda la funcino se da en una mism alinea, no hay que poner return.
//   const mayor = Mayor => Mayor >=10 ? console.log("el Numero es mayor") : console.log("el numero es menor");
//   mayor(numero);



//   // Modo Largo | Se ejecuta este tipo de arrow function cuando el codigo es mas largo.
//   console.log(" - 2 -")
//   const menor = Menor => {
//     if(Menor <= 10 ){
//       console.log("El numero es menor");
//     }else {
//       console.log("El numero es mayor ")
//     }
//   }

//    menor(numero);


//    // De esta forma se pueden pasar varios parametros en una arrow fucnion / funciona en ambos metodos , en el modo corto como en el modo largo.
//   console.log('- 3 - ');
//   const sumaNumeros = (a, b) => a + b;

//   console.log(sumaNumeros(250,20));

  
  
