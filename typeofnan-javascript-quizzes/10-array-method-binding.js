function cook() {}
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
      a. Ejemplo con emojis
      b. Ejemplo con números
      c. Genera una mutación o dicho de otra manera es este método inmutable? https://doesitmutate.xyz/map

  2. Bind -> Diagrama https://excalidraw.com/#json=5903141824364544,I86pkXOFicUP-yN9gs76qg
    a. Qué es el this? Ejemplo de función coolestDeveloper()
    b. Qué hace el método bind()? Ejemplo de función coolestDeveloper()

  3. Solución

------------------------------------------------------------

Extra:
  - Pregunta de entrevista

Challenge + Solución:
  - https://quiz.typeofnan.dev/array-method-binding
  - https://github.com/lndgalante/youtube/blob/master/typeofnan-javascript-quizzes/10-array-method-binding.js

Videos Relacionados:
  - 4 - Prototypal Inheritance | ¿Cómo funciona la herencia en JavaScript? https://www.youtube.com/watch?v=JNZFCp-PbJM

Links Principales:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

Links Secundarios:
  - https://javascript.info/bind

*/

/*
1. Método map
  a. Ejemplo con emojis
*/

const cookedFood = ['🥔', '🌽', '🥚'].map(cook); // ['🍟', '🍿', '🍳'];

/*
1. Método map
  b. Ejemplo con números
*/

const numbers = [1, 2, 3];

const numbersMultipliedByTwo = numbers.map((number) => number * 2);

// console.log('\n ~ numbersMultipliedByTwo', numbersMultipliedByTwo);

/*
1. Método map
  c. Genera una mutación o dicho de otra manera es este método inmutable? https://doesitmutate.xyz/map
  El método map es inmutable, por ende no modifica el array al cuál aplicamos este método, sino que nos devuelve un array nuevo.
*/

/*
2. Bind
  a. Qué es el scope?

  El scope es el lugar donde nosotros definimos nuestras variables o constantes.
*/

/*
let pet = 'Cat';

if (pet === 'Cat') {
  let message = 'meow';
  console.log('\n ~ message', message);
}

console.log('\n ~ message', message);
*/

/*
2. Bind
  a. Qué es el this?

  El this es un objeto que varia según el contexto donde llamemos la mismo.
  Si estamos en el scope global el this en los navegadores será el Window object.
*/

/* const goDeveloper = {
  name: 'Lele',
  mainLanguage: 'Go',
  displayMainLanguage: function () {
    console.log(`My favourite language is ${this.mainLanguage}`);
  },
};

goDeveloper.displayMainLanguage();
 */

/*
2. Bind
  b. Qué hace el método bind()? Ejemplo de función coolestDeveloper()

  El método bind() nos devuelve una función y pasamos por parámetro un objeto
  el cuál el this de la función ahora apuntará a este objeto.

  Qué sucede cuando llamamos a displayRubyLanguage sin bindeaarlo? (Posible pregunta de entrevista)
*/

function coolestDeveloper() {
  console.log(`The coolest developer is ${this.name}`);
}

// coolestDeveloper();

const gameDeveloper = { name: 'John Carmack' };

const coolestGameDeveloper = coolestDeveloper.bind(gameDeveloper);

// coolestGameDeveloper();

const goDeveloper = {
  name: 'Lele',
  mainLanguage: 'Go',
  displayMainLanguage: function () {
    console.log(`My favourite language is ${this.mainLanguage}`);
  },
};

const rubyDeveloper = {
  name: 'Hugo',
  mainLanguage: 'Ruby',
};

const displayRubyLanguage = goDeveloper.displayMainLanguage.bind(rubyDeveloper);

// displayRubyLanguage();

/*
 3. Solución
*/

const lodashMap = require('lodash.map');

Array.prototype.map = function (callback) {
  console.log('cb', callback.toString());

  console.log('this', this);

  return lodashMap(this, callback);
};

const map = ['a', 'b', 'c'].map.bind([1, 2, 3]);

map((element) => console.log(element));

// - 1 2 3
// - a b c
// - An error is thrown
// - Something else
