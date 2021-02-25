/*

Challenge:
  Array Method Binding

Descripción:
  Que se loguea por pantalla en el siguiente escenario?

Posibles opciones:
  - 1 2 3
  - a b c
  - An error is thrown
  - Something else

------------------------------------------------------------

Conceptos a entender:
  1. Método map

  2. Bind
    a. Qué es el this? Ejemplo de función coolestDeveloper()
    b. Qué hace el método bind()? Ejemplo de función coolestDeveloper()
    c. Cómo funciona el this en las arrow functions?

  3. Solución

------------------------------------------------------------

Extra:
  - Pregunta de entrevista

Challenge + Solución:
  - https://quiz.typeofnan.dev/array-method-binding
  - https://github.com/lndgalante/youtube/blob/master/typeofnan-javascript-quizzes/10-array-method-binding.js

Links Principales:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

Links Secundarios:
  - https://javascript.info/bind

*/

/*
1. Método map
*/

const numbers = [2, 4, 6];

const numbersMultipliedByTwo = numbers.map((number) => number * 2);

/*
2. Bind
  a. Qué es el this?

  El this es un objeto que varia según el contexto donde es llamado.
  Si estamos en el scope global el this en los navegadores será el Window object.
*/

console.log('this', this);

const developer = {
  name: 'Travis',
  mainLanguage: 'Go',
  displayMainLanguage: function () {
    console.log(`My favourite language is ${this.mainLanguage}`);
  },
};

/*
2. Bind
  b. Qué hace el método bind()? Ejemplo de función coolestDeveloper()

  El método bind() nos devuelve una función y pasamos por parámetro un objeto
  el cuál el this de la función ahora apuntará a este objeto.
*/

/*
function coolestDeveloper() {
  console.log(`The coolest developer is ${this.name}`);
}

coolestDeveloper();

const gameDeveloper = { name: 'John Carmack' };

const coolestGameDeveloper = coolestDeveloper.bind(gameDeveloper);

coolestGameDeveloper();
*/

/*
2. Bind
  c. Cómo funciona el this en las arrow functions?
    - Ejemplo de función coolestDeveloper2()

  Las arrow functions heredan el this de su contexto más cercano
  En nuestro caso el this es el this global, siendo el window object.
  No podemos usar el método bind en las arrow functions.
*/

/*
 const coolestDeveloper2 = () => {
  console.log(`The coolest developer is ${this.name}`);
};

const softDeveloper = { name: 'Linus Torvalds' };

const coolestSoftwareDeveloper = coolestDeveloper2.bind(softDeveloper);

coolestSoftwareDeveloper();
*/

/*
 3. Solución
*/

// const map = ['a', 'b', 'c'].map.bind([1, 2, 3]);
// map((el) => console.log(el));

const lodashMap = require('lodash.map');

Array.prototype.map = function (fn) {
  console.log(`${fn}`);
  console.log(this);
  return lodashMap(this, fn);
};

const newMap = ['a', 'b', 'c'].map.bind([1, 2, 3]);

newMap((element) => {
  console.log(element);
});

/*
Extra:
  - Pregunta de entrevista
*/

/*
const hero = {
  name: 'Iron Man',
  superPower: 'Intelligence',
  displaySuperPower: function () {
    console.log(`${this.name} super power is his ${this.superPower}`);
  },
};

const anotherSuperPower = hero.displaySuperPower;

console.log(anotherSuperPower());
console.log(hero.displaySuperPower());
*/
