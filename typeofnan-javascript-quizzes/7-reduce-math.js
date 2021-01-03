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
    a. Definición y visualización de reduce, https://reduce.surge.sh
    b. Ejemplo de suma de números
    c. Inmutabilidad, https://doesitmutate.xyz

  3. Solución

------------------------------------------------------------

Extra:
  - Escribiendo nuestro propio reduce
  - Resolvamos 6 ejercicios usando reduce https://coursework.vschool.io/array-reduce-exercises

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

function sum(x, y) {
  return x + y;
}

function randomNumber() {
  return Math.random();
}

/*
  2. Reduce
    a. Definición y visualización de reduce, https://reduce.surge.sh
*/

//  El método reduce se suele utilizar cuando queremos calcular un valor único.

/*
  2. Reduce
    b. Ejemplo de suma de números
*/

const numbers = [3, 5, 1, 4, 2];

const sumOfNumbers = numbers.reduce((accumulator, number) => accumulator + number, 0);

/*
  2. Reduce
    c. Inmutabilidad, https://doesitmutate.xyz
*/

/*
  3. Solución
*/

const array = [(x) => x * 1, (x) => x * 2, (x) => x * 3, (x) => x * 4];

const result = array.reduce((accumulator, fn) => accumulator + fn(accumulator), 1);

// console.log('The result is:', result);

/*

  | iteration  | fn             | expression I         | expression II     | accumulator |
  |------------|----------------|----------------------|-------------------|-------------|
  | 0          | (x) => x * 1   | 1 + (1) => 1 * 1     | 1 + 1             | 2           |
  | 1          | (x) => x * 2   | 2 + (2) => 2 * 2     | 2 + 4             | 6           |
  | 2          | (x) => x * 3   | 6 + (6) => 6 * 3     | 6 + 18            | 24          |
  | 3          | (x) => x * 4   | 24 + (24) => 24 * 4  | 24 + 96           | 120         |

 */
