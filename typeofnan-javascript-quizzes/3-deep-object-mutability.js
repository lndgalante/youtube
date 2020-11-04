/*

Challenge:
  Deep Object Mutability

Descripción:
  Considerando el siguiente objeto representando un usuario, "Joe", y su perro "Buttercup".
  Si usamos el método Object.freeze para preservar nuestro objeto
  y después intentamos mutar el nombre "Buttercup". Qué se loguea por pantalla?

Posibles opciones:
  - Daffodil
  - Buttercup
  - An error is thrown

--------------------

Conceptos a entender:
  - Property Flags
  - Object.freeze()

Preguntas a hacernos:
  - Como hacer un objeto totalmente inmutable? Ej: recursividad usando
  - Como crear un nuevo objeto sin modificar el original usando el spread operator?

Links:
  - https://javascript.info/property-descriptors
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
*/

const user = {
  name: 'Joe',
  age: 25,
  pet: {
    type: 'dog',
    name: 'Buttercup',
  },
}

Object.freeze(user)

user.pet.name = 'Daffodil'

console.log(user.pet.name)
