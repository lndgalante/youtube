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

Conceptos a entender
  1. Property Descriptors
    - value
    - enumerable
    - writable
    - configurable

  2. Como leer las propiedades de una key usando Object.getOwnPropertyDescriptor(obj, key);

  3. Como definir las propiedades de una key usando Object.defineProperty(obj, key, { ...propiedades });

  4. Que hace Object.freeze(obj) ? Qué propiedades de las keys modifica?

Extra!
  - Como hacer un objeto totalmente inmutable? Creemos una función recursiva! y probemos nuevamente el challenge...
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
