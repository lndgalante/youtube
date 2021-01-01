/*

Challenge:
  Reduce Math

Descripción:
  Hora de matemáticas! Que se loguea por pantalla?

Posibles opciones:
  - 1
  - 60
  - 100
  - 120

------------------------------------------------------------

Conceptos a entender:
  1. Arrow functions

  2. Reduce
    a. Escribiendo nuestro propio reduce
    b. Ejemplo de suma de números
    c. Visualización de reduce, https://reduce.surge.sh
    d. Inmutabilidad, https://doesitmutate.xyz

  3. Solución

------------------------------------------------------------

Challenge + Solución:
  - https://quiz.typeofnan.dev/reduce-math
  - https://github.com/lndgalante/youtube/blob/master/typeofnan-javascript-quizzes/7-reduce-math.js

Links Principales:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

Links Secundarios:
  - https://javascript.info/arrow-functions-basics
  - https://javascript.info/array-methods#reduce-reduceright

*/

/*
  1. Arrow functions
      Las arrow functions o funciones flechas fueron introducidas en ES6 o ES2015.
      Las mismas traen varios beneficios como:
        - Return implícito
        - Sintáxis concisa
        - This heredado por el contexto más cercano
*/

function suma(x, y) {
  return x + y;
}

/*
  2. Reduce
    a. Escribiendo nuestro propio reduce
*/

function reduce(array, reducer, initialValue) {
  let accumulator = initialValue;

  for (const element of array) {
    accumulator = reducer(accumulator, element);
  }

  return accumulator;
}

/*
  2. Reduce
    b. Ejemplo de suma de números
*/

const numbers = [3, 5, 1, 4, 2];

const sumReducer = (accumulator, number) => accumulator + number;

const sumOfNumbersCustom = reduce(numbers, sumReducer, 0);

const sumOfNumbers = numbers.reduce((accumulator, number) => accumulator + number, 0);

/*
  2. Reduce
    c. Visualización de reduce, https://reduce.surge.sh
*/

/*
  2. Reduce
    d. Inmutabilidad, https://doesitmutate.xyz
*/

/*
  3. Solución
*/

const array = [(x) => x * 1, (x) => x * 2, (x) => x * 3, (x) => x * 4];

const result = array.reduce((accumulator, fn) => accumulator + fn(accumulator), 1);

// iteration      expression I            expression II     accumulator (initalized at 1)
// 0              1 + (1) => 1 * 1        1 + 1             2
// 1              2 + (2) => 2 * 2        2 + 4             6
// 0              6 + (6) => 6 * 3        6 + 18            24
// 0              24 + (24) => 24 * 4     24 + 96           120

// console.log('The result is:', result);
