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
  - Escribiendo nuestro propio reduce
*/

function reduce(array, reducer, initialValue) {
  let accumulator = initialValue;

  for (const element of array) {
    accumulator = reducer(accumulator, element);
  }

  return accumulator;
}
