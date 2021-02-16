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
    b. Tabla para visualizar valores y direcciones de memoria -> https://whimsical.com/youtube-UHP1pRc5k3txvDHNdcHLvp@2Ux7TurymM67sh38s2x9
    c. Que sucede cuando enviamos datos primitivos u objetos a una función?

  2. Operador spread (operador de propagación)
    a. Qué es el operador spread?
    b. Ejemplo de números

  3. Solución
    a. Diagrama en Whimsical -> https://whimsical.com/youtube-UHP1pRc5k3txvDHNdcHLvp@2Ux7TurymP1TRFgscDus

------------------------------------------------------------

Extra:
  - Como crear una nueva copia del array y del objeto?
  - Ejercicio de práctica

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
  a. Tipos primitivos y Tipos de Referencia

Datos primitivos:
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

Características de los tipos de valores o datos primitivos:

  - Los datos primitivos son inmutables
  - Las datos primitivos son copiados por su valor
  - Los datos primitivos se comparan por su valor
  - Los datos primitivos se almacenan en el Stack

Características de los tipos de referencia:

  - Los objetos son mutables, cuando los modifiquemos no obtenemos un nuevo objeto
  - Los objetos se comparan por su referencia, es decir que comparamos su dirección en memoria
  - Los objetos son copiados por su referencia a memoria, es decir almacenamos la misma dirección en memoria
  - Los objetos se almacenan en el Heap, donde se almacenan estructuras complejas

*/

// Datos Primitivos: Inmutabilidad
let firstNumber = 1;

firstNumber++;
console.log('firstNumber', firstNumber);

// Datos Primitivos: Copia por valor
let secondNumber = firstNumber;
secondNumber += 1;
console.log('\n ~ firstNumber', firstNumber);
console.log('\n ~ secondNumber', secondNumber);

// Datos Primitivos: Comparación por valor
console.log('Is firstNumber equal to secondNumber', firstNumber === secondNumber);

// -----------------------------------------------------------------------------------

// Objetos: Mutabilidad
let firstNumberObject = { value: 1 };
let secondNumberObject = firstNumberObject;

secondNumberObject.value += 1;

firstNumberObject.value = 4;
console.log('\n ~ firstNumberObject', firstNumberObject);

// Objetos: Copia por referencia
// let secondNumberObject = firstNumberObject;
secondNumberObject.value += 1;
console.log('\n ~ firstNumberObject', firstNumberObject);
console.log('\n ~ secondNumberObject', secondNumberObject);

// Objetos: Comparación por referencia
console.log('Is firstNumberObject equal to secondNumberObject', firstNumberObject === secondNumberObject);

/*
1. Valores y Referencia
  b. Tabla para visualizar valores y direcciones de memoria -> https://whimsical.com/youtube-UHP1pRc5k3txvDHNdcHLvp
*/

/*
1. Valores y Referencia
  c. Que sucede cuando enviamos datos primitivos u objetos a una función?

Cuando pasamos un dato primitivo por parámetros este es copiado por valor como ya vimos,
lo cuál significa que tenemos un nuevo valor y no modificará el que se encuentra por fuera.

Cuando pasamos un objeto por parámetros este es copiado por referencia como también vimos,
lo cuál significa que en este caso si modificará al objeto que se encuentra fuera de la función.
*/

function incrementPrimitive(number) {
  number += 1;
}

console.log('Before incrementPrimitive() call', firstNumber);
incrementPrimitive(firstNumber);
console.log('After incrementPrimitive() call', firstNumber);

function incrementObject(number) {
  number.value += 1;
}

console.log('Before incrementObject() call', firstNumberObject);
incrementObject(firstNumberObject);
console.log('After incrementObject() call', firstNumberObject);

/*
2. Operador spread (operador de propagación)
  a. Qué es el operador spread?
    El operador spread nos permite propagar los elementos de un iterable en otro.
    Por ejemplo un iterable puede ser un string, un array, un objeto, o un Set.

*/

/*
2. Operador spread (operador de propagación)
  b. Ejemplo de abcedario
*/

/*
const numbers = [1, 2, 3];
const numbers2 = [4, 5, 6];

const allNumbers = [...numbers, ...numbers2];
console.log('allNumbers', allNumbers);
*/

/*
3. Solución
  a. Diagrama en Whimsical -> https://whimsical.com/youtube-UHP1pRc5k3txvDHNdcHLvp@2Ux7TurymP1TRFgscDus
*/

const firstArray = [{ firstName: 'James' }];
const secondArray = [...firstArray];

secondArray[0].firstName = 'Jonah';

console.log(firstArray);

/*
Extra:
  - Como crear una nueva copia del array y del objeto?
*/

const thirdArray = [{ ...firstArray[0] }];

const fourthArray = firstArray.map((person) => ({ ...person }));

/*
Extra:
  - Ejercicio de práctica
  Crear una nueva estructura llamada "newCopy" a partir de "maths"
  para que cuando modifique la key notes, no modifique la estructura anterior "maths"
*/

const maths = {
  notes: [8, 8, 7],
  student: 'Tommy Maximoff',
};
