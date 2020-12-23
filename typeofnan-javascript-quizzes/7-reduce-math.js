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
  1. Reduce
    a. Ejemplo de suma
    b. Escribiendo nuestro propio reduce
    c. Visualización de reduce

  2. Solución

------------------------------------------------------------

Challenge + Solución:
  - https://quiz.typeofnan.dev/reduce-math/

Links Principales:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

Links Secundarios:
  -

*/

const arr = [(x) => x * 1, (x) => x * 2, (x) => x * 3, (x) => x * 4];

const result = arr.reduce((agg, el) => agg + el(agg), 1);

console.log('The result is:', result);
