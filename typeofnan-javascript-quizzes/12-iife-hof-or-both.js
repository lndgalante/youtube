/*

Challenge:
  IIFE, HOF, or Both


Descripción:
  El siguiente snippet ilustra una Función-Inmediatamente-Invocada (IIFE),
  una Función de Alto Orden (HOF), ambas o ninguna?

Posibles opciones:
  - Solo IIFE
  - Solo HOF
  - Ambas: IIFE y HOF
  - Ninguna

------------------------------------------------------------

Conceptos a entender:
  1. IIFE: Inmediately Invoked Function Expression
    a. Qué es una IIFE?
    b. Sintáxis
      Declaración de función -> https://poet.krasimir.now.sh/e/7mAMJzN9Mug
      Arrow function -> https://poet.krasimir.now.sh/e/8abJojLrVCQ
    c. Historia y su uso

  2. HOF: Higher Order Function

  3. Solución
    a. Diagrama https://poet.krasimir.now.sh/e/elegNEmlYTy

------------------------------------------------------------

Challenge + Solución:
  - https://quiz.typeofnan.dev/iffe-hof-both
  - https://github.com/lndgalante/youtube/blob/master/typeofnan-javascript-quizzes/12-iife-hof-or-both.js

Links Principales:
  - https://developer.mozilla.org/en-US/docs/Glossary/IIFE
  - https://eloquentjavascript.net/05_higher_order.html

Links Alternativos:
  - https://javascript.info/var#iife
  - https://flaviocopes.com/javascript-iife
  - https://programmingwithmosh.com/javascript/what-are-higher-order-functions-in-javascript

*/

const fetch = require('isomorphic-fetch');

/*
  1. IIFE: Inmediately Invoked Function Expression
    a. Qué es una IIFE?
*/

/*
  IIFE es un acrónimo para Immediately Invoked Function Expression.
  Siendo su traducción como Expresión de Función Inmediatamente Invocada.
  Es una función de JavaScript que se ejecuta al momento que es definida.

  Para la definición de la función se suele usar funciones anónimas,
  es decir funciones sin nombre ya que no se vuelven a re-utilizar,
  debido a que una vez ejecutadas estas no quedan almacenadas en memoria.
*/

/*
  1. IIFE: Inmediately Invoked Function Expression
    b. Sintáxis
      Declaración de función -> https://poet.krasimir.now.sh/e/7mAMJzN9Mug
      Arrow function -> https://poet.krasimir.now.sh/e/8abJojLrVCQ
*/

/*
  Para crear una IIFE debemos de realizar los siguientes pasos:
    1. Definir nuestra función ya sea anónima o no, y puede ser una función normal o arrow function
    2. Encerrar nuestra función entre paréntesis o también conocido como operador de agrupación
    3. Una vez encerrada nuestra función vamos a definir un set de paréntesis para ejecutar la misma
*/

(function () {
  console.log('Hola soy una IIFE 👋');
})();

(() => {
  console.log('Hola soy otra IIFE 😎');
})();

/*
  1. IIFE: Inmediately Invoked Function Expression
    c. Historia y su uso
*/

/*
  Antes de que exista let y const, que trajeron features de scope por bloque,
  utilizabamos var lo cuál no permitía definir variables pero estas eran creadas de manera global debido al hoisting.
  Siendo el hoisting el mecanismo por defecto donde las declaracions de var son movidas al inicio de nuestro scope,
  al menos que las definieramos dentro de una función y ahí pese al hoisting quedan definidas en ese scope.
  Por ende se usaban las IIFE para que estas variables sean locales y no contaminen el scope global.
*/

(function () {
  var character = 'Piccolo';
})();

// console.log(character) // Uncaught ReferenceError: character is not defined

/*
  Actualmente se suelen usar para poder utilizar async/await,
  ya que para poder utilizar await necesitamos utilizar una función async.
  Aunque hay un proposal llamado Top Level Await para poder utilizar await
  sin la necesidad de tener que definir una función con la keyword async.
*/

(async function () {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  const data = await response.json();
  console.log(data);
})();

/*
  También se suelen usar en el Module Pattern, pero no es algo que vamos a ver,
  ya que queda muy fuera del scope del contenido del video.
*/

/*
  2. HOF: Higher Order Function
    a. Qué es una HOF?
    b. Cuándo se usan?
*/

/*
  3. Solución
*/

((fn, val) => {
  return fn(val);
})(console.log, 5);

// filaA:columnaA:filaB:columnaB
