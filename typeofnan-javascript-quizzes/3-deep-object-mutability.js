/*

Challenge:
  Deep Object Mutability

Descripción:
  Considerando el siguiente objeto representando un usuario, "Joe", y su perro "Buttercup".
  Si aplicamos el método Object.freeze a este objeto y posteriormente intentamos mutar el nombre "Buttercup".
  Qué se loguea por pantalla?

Posibles opciones:
  - Daffodil
  - Buttercup
  - An error is thrown

--------------------

Conceptos a entender:
  1. Repaso breve de objetos

  2. Property Descriptors
    - value
    - enumerable
    - writable
    - configurable

  3. Como leer las propiedades de una key usando Object.getOwnPropertyDescriptor(obj, key);

  4. Como definir las propiedades de una key usando Object.defineProperty(obj, key, { ...propiedades });

  5. Que hace Object.freeze(obj) ? Qué propiedades de las keys modifica?

--------------------

Parte II:
  - Como hacer un objeto totalmente freezado? Creemos una función recursiva!
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
};

Object.freeze(user);

user.pet.name = 'Daffodil';

console.log('\n: user pet name', user.pet.name);

/*

 1. Repaso breve de objetos
  Un objeto como una colección no ordenada de pares clave/valor o key/value

*/

let pokemon = {
  name: 'Pikachu',
  level: 2,
  metadata: {
    firstRelease: 1996,
  },
};

/*
  2. Property Descriptors
      Son las propiedades de las keys de un objeto, y por defecto las mismas se inicializan en true, exceptuan el property descriptor value

    - value
      Nos permite asignar o modificar el valor de una key

    - enumerable (por defecto en true)
      Nos permite que la key sea iterable o no.
      Si ejecutamos un loop (for-in) vamos a poder visualizar o no la misma key.

    - writable (por defecto en true)
      Nos permite que la key se pueda escribir o no, si es false la key sera de solo lectura

    - configurable (por defecto en true)
      No podremos modificar ninguna de las anteriores si configurable esta seteado en false.
      Una vez seteado en false, no podremos volver el mismo en true

  3. Como leer las propiedades de una key usando Object.getOwnPropertyDescriptor(obj, key);

  4. Como definir las propiedades de una key usando Object.defineProperty(obj, key, { ...propiedades });
*/

const pokemonNamePropertyDescriptors = Object.getOwnPropertyDescriptor(pokemon, 'name');

Object.defineProperty(pokemon, 'level', {
  writable: false,
  enumerable: false,
  configurable: false,
});

pokemon.level = 4;

// Dispara error ya que no podemos modificar nuevamente los property descriptors
// Object.defineProperty(pokemon, 'level', {
//   writable: true,
// });

// const pokemonLevelPropertyDescriptors = Object.getOwnPropertyDescriptor(pokemon, 'level');

// for (const key in pokemon) {
//   console.log('\n: key', key);
//   const value = pokemon[key];
//   console.log('\n: value', value);
// }

/*
  5. Que hace Object.freeze(obj) ? Qué propiedades de las keys modifica?
    El mismo setea writable y configurable en false, de todas las keys de primer nivel del objeto
*/

Object.freeze(pokemon);

const pokemonMetadataPropertyDescriptors = Object.getOwnPropertyDescriptor(pokemon, 'metadata');
// console.log('\n: pokemonMetadataPropertyDescriptors', pokemonMetadataPropertyDescriptors);

const pokemonFirstReleasePropertyDescriptors = Object.getOwnPropertyDescriptor(pokemon.metadata, 'firstRelease');
// console.log('\n: pokemonFirstReleasePropertyDescriptors', pokemonFirstReleasePropertyDescriptors);
