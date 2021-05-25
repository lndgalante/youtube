/*

Challenge:
  Function Equality (Comparando funciones)

Descripción:
  Qué se logue cuando testeamos los siguientes escenarios de igualdad?

Posibles opciones:
  - true true
  - true false
  - false true
  - false false

------------------------------------------------------------

Conceptos a entender:
  1. Valores y Referencia
    a. Tipos Primitivos y Tipos de Referencia
    b. Ejemplo comparando arrays + diagrama -> https://whimsical.com/youtube-UHP1pRc5k3txvDHNdcHLvp

  2. Funciones
    a. Que propiedades poseen?

  3. Solución

------------------------------------------------------------

Challenge + Solución:
  - https://quiz.typeofnan.dev/function-equality
  - https://github.com/lndgalante/youtube/blob/master/typeofnan-javascript-quizzes/17-function-equality.js

Links Principales:
  - https://javascript.info/function-basics
  - https://javascript.info/arrow-functions-basics

*/

/*
1. Valores y Referencia
  a. Tipos primitivos y Tipos de Referencia
*/

/*
  Hagamos un breve repaso de los datos primitivos y tipos de referencia

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

  Ya vimos las características y diferencias de los datos primitivos y los tipos de referencia en el video "Spread and Rename",
  Como también como se comportaban el Stack y el Heap, pero ahora nos vamos a centrar solamente en cómo se comparan estos tipos

  Características de los datos primitivos y los tipos de referencia
    - Los datos primitivos se comparan por su valor
    - Los objetos se comparan por su referencia, es decir que comparamos su dirección en memoria
*/

/*
1. Valores y Referencia
  b. Ejemplo comparando arrays + diagrama -> https://whimsical.com/youtube-UHP1pRc5k3txvDHNdcHLvp
*/

const dragonballCharacters = ['Goku', 'Krilin', 'Piccolo'];

const dragonballzCharacters = ['Goku', 'Krilin', 'Piccolo'];

// console.log(dragonballCharacters == dragonballzCharacters);

// console.log(dragonballCharacters === dragonballzCharacters);

/*
  Hay alguna diferencia entre el doble y triple igual?
  Recordemos que el doble igual habilita la coerción implícita y el triple igual la deshabilita.

  Partiendo de ahí la coerción implícita solo funciona además para los datos primitivos,
  para por ej si comparamos un número y un string, el string es convertido a número y posteriormente se comparan.
  Pero en los objetos como estamos comparando su referencia o dirección en memoria.
*/

/*
  En este caso ambas comparaciones son falsas porque son distintas direcciones en memoria.
  Es decir que la única manera que esta comparación sea verdad es si comparamos el array contra si mismo.
*/

/*
2. Funciones
  a. Que propiedades poseen?
*/

function createFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

/*
  Las funciones son de tipo "function", veamoslo con typeof.
  Pero como los arrays, son un tipo especial de objeto, es decir que cuentan con propiedades, veamos cuales con console.dir.
*/

/*
3. Solución

Posibles opciones:
  - true true
  - true false
  - false true
  - false false
*/

const a = (number) => number;

const b = (number) => number;

console.log(a == b);

console.log(a(7) === b(7));
