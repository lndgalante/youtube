/*

Challenge:
  Spread and Rename

Descripción:
  Considerando el siguiente array con un solo objeto.
  Que sucede cuando propagamos el array y cambiamos la propiedad firstName del objeto en el indice 0?

Posibles opciones:
  - [{ firstName: "James" }]
  - [{ firstName: "Jonah" }]
  - Something else

------------------------------------------------------------

Conceptos a entender:
  1. Valores y Referencia
    a. Tipos de Valores y Tipos de Referencia
    b. Ejemplo con números y objetos con números
    c. Tabla para visualizar valores y direcciones de memoria -> https://whimsical.com/youtube-UHP1pRc5k3txvDHNdcHLvp@2Ux7TurymM67sh38s2x9

  2. Operador spread (operador de propagación)
    a. Qué es el operador spread?
    b. Ejemplo de abcedario

  3. Solución
    a. Diagrama en Whimsical -> https://whimsical.com/youtube-UHP1pRc5k3txvDHNdcHLvp@2Ux7TurymP1TRFgscDus

------------------------------------------------------------

Challenge + Solución:
  - https://quiz.typeofnan.dev/spread-and-rename
  - https://github.com/lndgalante/youtube/blob/master/typeofnan-javascript-quizzes/9-spread-and-rename.js

Links Principales:
  - https://javascript.info/object-copy
  - https://github.com/HackYourFutureBelgium/just-javascript/tree/master/08-mutation

Links Secundarios:
  - https://github.com/adonismendozaperez/33-js-conceptos#3-tipos-de-valores-y-tipos-de-referencias

*/

/*
1. Valores y Referencia
  a. Tipos de Valores y Tipos de Referencia

Tipos de datos primitivos:
  - number
  - string
  - boolean
  - null
  - undefined
  - BigInt
  - Symbol

Tipos de Referencia
  - Array
  - Objects
  - Function

Cuando almancenamos un valor primitivo en una variable, es este mismo el que se almacena en la variable.
En cambio cuando almacenamos objetos (Arrays, Objetos, Funciones) son la dirección en memoria donde se almacena ese objeto.

Las datos primtivos son copiados por su valor.
Los objetos son copiados por su referencia a memoria.
*/

/*
1. Valores y Referencia
  b. Ejemplo con números y objetos con números
*/

let firstNumber = 1;
let secondNumber = firstNumber;

secondNumber += 1;

console.log('\n ~ firstNumber', firstNumber);
console.log('\n ~ secondNumber', secondNumber);

let firstNumberObject = { value: 1 };
let secondNumberObject = firstNumberObject;

secondNumberObject.value += 1;

console.log('\n ~ firstNumberObject', firstNumberObject);
console.log('\n ~ secondNumberObject', secondNumberObject);

/*
1. Valores y Referencia
  c. Tabla para visualizar valores y direcciones de memoria -> https://whimsical.com/youtube-UHP1pRc5k3txvDHNdcHLvp
*/

/*
2. Operador spread (operador de propagación)
  a. Qué es el operador spread?
    El operador spread nos permite propagar los elementos de un iterable en otro.
    Por ejemplo un iterable puede ser un string, un array, un objeto, o un Set.

  b. Ejemplo de abcedario
      const characters = ['a', 'b', 'c']
      const characters2 = ['d', 'e', 'f']

      const allCharacters = [...characters, ...characters2]
      console.log('allCharacters', allCharacters)
*/

/*
3. Solución
  a. Diagrama en Whimsical
*/

const firstArray = [{ firstName: 'James' }];
const secondArray = [...firstArray];

secondArray[0].firstName = 'Jonah';

console.log(firstArray);
