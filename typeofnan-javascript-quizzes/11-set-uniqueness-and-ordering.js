/*

Challenge:
  Set Uniqueness and Ordering

Descripción:
  En el siguiente problema, usamos el objeto set y la sintáxis spread para crear un nuevo array.
  Quee se loguea por pantalla ? Son los items forzados a ser únicos? Estos se ordenan ?

Posibles opciones:
  - 5 2
  - 5 3
  - 4 2
  - 4 3

------------------------------------------------------------

Conceptos a entender:
  1. Método Set
    a. Colecciones de Pokemones -> https://whimsical.com/youtube-UHP1pRc5k3txvDHNdcHLvp
    b. Ejemplo con Pokemones
    c. Qué sucede con el orden?

  2. Cómo convertir un Set a un Array?
    a. Spread Operator
    b. Alternativa: Array.from()

  3. Solución

------------------------------------------------------------

Extra:
  a. Proposal Set Methods -> https://github.com/tc39/proposal-set-methods
  b. Ejercicio para practicar: Filtrar anagramas -> https://javascript.info/task/filter-anagrams

Challenge + Solución:
  - https://quiz.typeofnan.dev/set-uniqueness-ordering
  - https://github.com/lndgalante/youtube/blob/master/typeofnan-javascript-quizzes/11-set-uniqueness-and-ordering.js

Videos Relacionados:
  - 2 - A Set of Objects | ¿Cómo funcionan los Sets en JavaScript? https://www.youtube.com/watch?v=5BhvAg4Vy44

Links Principales:
  - https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set
  - https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  - https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/from

Links Alternativos:
  - https://javascript.info/map-set
  - https://javascript.info/rest-parameters-spread

*/

/*
  1. Método Set
    a. Colecciones de Pokemones -> https://whimsical.com/youtube-UHP1pRc5k3txvDHNdcHLvp
*/

/*
  1. Método Set
    b. Ejemplo con Pokemones
*/

const pokemons = ['Dragonair', 'Jigglypuff', 'Squirtle', 'Jigglypuff', 'Dragonair', 'Jigglypuff', 'Dragonite'];

const unrepeatedPokemonsSet = new Set(pokemons);

/*
  1. Método Set
    c. Qué sucede con el orden?
*/

/*
  La iteración sobre un Map o un Set es siempre en el orden de inserción de sus elementos,
  así que no podemos decir que estas colecciones son desordenadas,
  pero tampoco podemos re-ordenar los elementos o directamente obtener un elemento por su posición.
*/

/*
  2. Cómo convertir un Set a un Array?
    a. Spread Operator
*/

const unrepeatedPokemonsArray = [...unrepeatedPokemonsSet];

/*
  2. Cómo convertir un Set a un Array?
    b. Alternativa: Array.from()
*/

const unrepeatedPokemonsArray2 = Array.from(unrepeatedPokemonsSet);

/*
  3. Solución
*/

/*
const arr = [...new Set([3, 1, 2, 3, 4])];
console.log(arr.length, arr[2]);
*/

const numbers = [3, 1, 2, 3, 4];

const numbersSet = new Set(numbers);

const unrepeatedNumbers = [...numbersSet];

console.log(`${unrepeatedNumbers.length} | ${unrepeatedNumbers[2]}`);

/*
Extra:
  a. Proposal Set Methods: https://github.com/tc39/proposal-set-methods
*/

/*
Extra:
  b. Ejercicio para practicar: Filtrar anagramas -> https://javascript.info/task/filter-anagrams

  Los anagramas son palabras que tienen el mismo número de letras, pero en diferente orden.

  Por ejemplo:
    * nap - pan
    * ear - are - era
    * cheaters - hectares - teachers

  Escribí una función cleanAnagrams(array) que devuelva un array limpio de anagramas.

  Por ejemplo:
    const array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    console.log(cleanAnagrams(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

  Por cada grupo de anagramas solo debe permanecer una palabra, sin importar cuál.

*/
