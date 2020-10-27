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
  - Tipos de datos primitivos (7)
  - Estructura de datos: Set
  - Operador spread (propagador)
*/

const mySet = new Set([{ a: 1 }, { a: 1 }])
const result = [...mySet]
console.log(result)
