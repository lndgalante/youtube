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

const initialValue = 0;
const values = [3, 5, 1, 4, 2];

const total = values.reduce((acc, item) => {
  return acc + item;
}, initialValue);
