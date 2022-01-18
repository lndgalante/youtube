/*

Challenge:
  Batman v. Superman

Descripción:
  Considerando la siguiente función superheroMaker.
  Qué se loguea por pantalla cuando enviamos los siguientes 2 inputs?

Posibles opciones:
  - "Batman"
  - "Superman"
  - "Batman" "Superman"
  - Nothing gets logged

------------------------------------------------------------

Conceptos a entender:
  1. Arrow functions
    a. Return implícito

  2. Qué es el prototype?
    a. Creemos una clase Character
    b. Agreguemos un nuevo método "levelUp" al prototype
    c. Creemos una instancia "joker" y revisemos su cadena de prototipos en el browser

  3. Cómo funciona el operador instanceof?
    a. Caveats de instanceof
    b. Qué hacer con los caveats?

  4. Resolución

------------------------------------------------------------

Challenge + Solución:
  - https://quiz.typeofnan.dev/batman-v-superman/
  - https://github.com/lndgalante/youtube/blob/master/typeofnan-javascript-quizzes/14-batman-vs-superman.js

Links Principales:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
*/

/*
  1. Qué es el prototype?
    Los objetos tienen una propiedad prototype, lo cuál hace que la herencia sea posible en JavaScript.
    Esta propiedad es un objeto donde podemos definir los métodos y propiedades que queremos que nuestras instancias hereden.
*/

/*
  a. Creemos una clase Character
*/

function Character(name, mainEnemy, powerLevel) {
  this.name = name;
  this.mainEnemy = mainEnemy;
  this.powerLevel = powerLevel;
}

/*
  b. Agreguemos un nuevo método "levelUp" al prototype
*/

Character.prototype.levelUp = function () {
  this.powerLevel = this.powerLevel + 1000;
  return this.powerLevel;
};

/*
  c. Creemos una instancia "joker" y revisemos su cadena de prototipos en el browser
*/

const joker = new Character('Joker', 'Batman', 1200);

console.log(joker);
console.log(joker.levelUp());
console.log(joker.powerLevel);

/*
  2. Cómo funciona el operador instanceof?
    El operador "instanceof" chequea si la propiedad "prototype" de un constructor aparece
    en alguna parte de la cadena de prototipos de un objeto. El valor retornado  es un booleano
*/

console.log(joker instanceof Character);

console.log(joker instanceof Object);

function City(name, population) {
  this.name = name;
  this.population = population;
}

console.log(joker instanceof City);

/*
  a. Caveats de instanceof
  No todos son instancias de los constructores, por ej esto no cumple para los Strings o Numbers
  que hayan sido construídos con sus literales y no con sus constructores propios.
*/

const villain = 'Freezer';
console.log(villain instanceof String);

const antiHero = new String('Brolly');
console.log(antiHero instanceof String);

const PI = 3.1415926535;
console.log(PI instanceof Number);

const PHI = Number(1.618033);
console.log(PHI instanceof Number);

/*
  b. Qué hacer con los caveats?
  La verdad que hoy día es poco normal chequear la instancia de un valor,
  para los casos anteriores lo más común es usar typeof, y es lo que generalmente
  se utiliza para chequear que tipo de dato es el valor a chequear
*/

console.log(typeof villain === 'string');

console.log(typeof PI === 'number');

/*
  3. Resolución

*/

/*
  Hagamos una primer pregunta: "Qué devuelve la función?"
    A alto nivel vemos que según el booleano que devuelva el operador "instanceof",
    ejecutará el parámetro "a" en caso verdadero, o simplemente lo retornará.

  Una segunda pregunta sería: "Cómo calcula ese booleano el instanceof?"
    Chequea si el parámetro "a" es una instancia del constructor Function,
    o dicho en otras palábras si en la cadena de prototipos o prototype de "a"
    existe el constructor "Function" en algún lugar de la cadena.

  Como conclusión tenemos:
    - superheroMaker(() => 'Batman');
      En este caso la arrow function es una instancia de una función por ende
      el operador va a devolver verdadero y ejecutar este parámetro "a",
      devolviendo su resultado, y como esta usa un return implícito, devolverá "Batman"
      para al final mostrarlo por pantalla

    - superheroMaker('Superman');
      En este caso como un string no es una instancia de Function,
      internamente devolverá directamente este valor, para al final mostrarlo por pantalla.


    Enmtonces se reproducirá en la consola, ambos valores tanto "Batman" como "Superman",
    siendo la tercer opción la válida a elegir.
*/

/*
  - "Batman"
  - "Superman"
  - "Batman" "Superman"
  - Nothing gets logged
*/

const superheroMaker = (a) => {
  return a instanceof Function ? a() : a;
};

console.log(superheroMaker(() => 'Batman'));
console.log(superheroMaker('Superman'));
