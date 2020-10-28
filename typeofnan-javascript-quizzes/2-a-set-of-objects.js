/*

Challenge:
  A Set of objects

Descripción:
  Considerando el siguiente Set de objetos propagados en un nuevo array.
  Qué se loguea por pantalla?

Posibles opciones:
  - [{ a: 1 }, { a: 1 }]
  - [{ a: 1 }]

--------------------

Conceptos a entender:
  - Tipos de datos primitivos (7)

  - Set + Ejemplo de abecedario
    - Qué es un Set?
    - Como agregar valores al mismo? (2 maneras)
    - Como iterar sobre un Set?
    - Como conocer la cantidad de elementos?

  - Operador spread (propagador) + Ejemplo abecedario
    - Cómo se utiliza?
    - Para qué nos sirve?
    - Qué pasa cuando hacemos un spread de un Set en un array?

*/

const mySet = new Set([{ a: 1 }, { a: 1 }])
const result = [...mySet]
console.log('result', result)
