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
  1. Arrow functions

  2. Reduce
    a. Definición y visualización de reduce, https://reduce.surge.sh
    b. Ejemplo de suma de números
    c. Inmutabilidad, https://doesitmutate.xyz

  3. Solución

------------------------------------------------------------

Extra:
  - Escribiendo nuestro propio reduce
  - Resolvamos 6 ejercicios usando reduce https://coursework.vschool.io/array-reduce-exercises

Challenge + Solución:
  - https://quiz.typeofnan.dev/reduce-math
  - https://github.com/lndgalante/youtube/blob/master/typeofnan-javascript-quizzes/7-reduce-math.js

Links Principales:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

Links Secundarios:
  - https://javascript.info/arrow-functions-basics
  - https://javascript.info/array-methods#reduce-reduceright

*/

/*
  - Escribiendo nuestro propio reduce
*/

/*
  - Resolvamos 5 ejercicios usando reduce
*/

/*
  1) Convertir un array de números en un cadena de caracteres de todos esos números
*/

function stringConcat(arr) {}

// console.log(stringConcat([1, 2, 3])); // "123"

/*
  2) Convertir un array de votantes en el total de cuantas personas votaron
*/

function totalVotes(arr) {}

const voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false },
];

// console.log(totalVotes(voters)); // 7

/*
  3) Dado un array de articulos de tu lista de deseos, obtener cuanto costaría si comprarías todo a la vez.
      Usemos la Intl.NumberFormat API para formatear el número en la moneda que querramos.
*/

function shoppingSpree(arr) {}

const wishlist = [
  { title: 'Tesla Model S', price: 90000 },
  { title: '4 carat diamond ring', price: 45000 },
  { title: 'Fancy hacky Sack', price: 5 },
  { title: 'Gold fidgit spinner', price: 2000 },
  { title: 'A second Tesla Model S', price: 90000 },
];

// console.log(shoppingSpree(wishlist)); // 227005

/*
  4) Dado un array de arrays, aplanarlos para convertirlo en un solo array
*/

function flatten(arr) {}

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

/*
  5) Dado un array de potencial votantes, devolver el resultado de los votos

    Incluyendo cuantos votantes estaban en la edad:
     - entre 18 y 25
     - entre 26 y 35
     - entre 36 y 55
     - y cuantos de ellos actualmente votaron, debemos devolver un objeto como el siguiente:

      {
        numYoungVotes: 1,
        numYoungPeople: 4,
        numMidVotesPeople: 3,
        numMidsPeople: 4,
        numOldVotesPeople: 3,
        numOldsPeople: 4
      }

*/

const voters2 = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false },
];

const inRange = (value, min, max) => value >= min && value <= max;

function voterResults(arr) {}

// console.log(voterResults(voters2));

/*
  Extra, para practicar!
  Usando la fetch API obtener la cantidad total de estrellas que tienen todos tus repositorios.
  Usando la GitHub API, en especial el endpoint https://api.github.com/users/<TU USUARIO DE GITHUB>/repos
*/
