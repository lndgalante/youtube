/*

Challenge:
  A Set of objects

Descripción:
  Considerando el siguiente Set de objetos propagados en un nuevo array. Qué se loguea?

Posibles opciones:
  - [{ a: 1 }, { a: 1 }]
  - [{ a: 1 }]

--------------------

Conceptos a entender:
  - Tipos de datos primitivos - https://javascript.info/primitives-methods
  - Estructura Set - https://javascript.info/map-set
  - Operador spread (propagador) - https://javascript.info/rest-parameters-spread

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

Extra:
  - Cómo hacer para quedarnos con objetos no duplicados?
  - Cuando debería usar Set? Ejemplo:
*/

const mySet = new Set([{ a: 1 }, { a: 1 }])
const result = [...mySet]
console.log(result)
