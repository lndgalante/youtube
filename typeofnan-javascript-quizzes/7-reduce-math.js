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
    a. Definición y visualización, https://reduce.surge.sh
    b. Inmutabilidad, https://doesitmutate.xyz

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

      Se recomienda utilizar las arrow functions en los callbacks o en funciones one-liners.
*/

/* function sum(x, y) {
  return x + y;
} */

const sum = (x, y) => x + y;

// console.log('\n ~ sum', sum(2, 2));

/* function randomNumber() {
  return Math.random();
} */

const randomNumber = () => Math.random();

// console.log('\n ~ randomNumber', randomNumber());

/*
  2. Reduce
    a. Definición y visualización de reduce, https://reduce.surge.sh
*/

//  El método reduce se suele utilizar cuando queremos calcular un valor único a partir de un array.
//  Inicializamos en primera instancia un acumulador con un valor inicial, el cuál será devuelto al finalizar nuestro reduce.
//  Ejecuta una función reducer por cada elemento del array, y el resultado de esta función se va asignando al acumulador.
//  Este último será recibido por parámetros en la próxima ejecución de la función reducer.

const numbers = [1, 2, 3];

const total = numbers.reduce((accumulator, number) => accumulator + number, 0);

// console.log('\n ~ total', total);

/*
  2. Reduce
    b. Inmutabilidad, https://doesitmutate.xyz
*/

/*
  3. Solución
*/

const array = [(x) => x * 1, (x) => x * 2, (x) => x * 3, (x) => x * 4];

const result = array.reduce((accumulator, fn) => accumulator + fn(accumulator), 1);

console.log('The result is:', result);

/*

  | iteration  | fn             | expression I         | expression II     | accumulator |
  |------------|----------------|----------------------|-------------------|-------------|
  | 0          | (x) => x * 1   | 1 + (1) => 1 * 1     | 1 + 1             | 2           |
  | 1          | (x) => x * 2   | 2 + (2) => 2 * 2     | 2 + 4             | 6           |
  | 2          | (x) => x * 3   | 6 + (6) => 6 * 3     | 6 + 18            | 24          |
  | 3          | (x) => x * 4   | 24 + (24) => 24 * 4  | 24 + 96           | 120         |

 */
