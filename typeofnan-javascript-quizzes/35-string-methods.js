/*

Challenge:
  String Methods

Descripción:
  Los métodos de los strings son usados para trabajar con cadenas en JavaScript.
  Qué metodo podría usarse para encontrar el valor especificado y devolver la posición del matcheo?

  Por ejemplo, qué metodo te dice que "bird" esta en la posición 4 en el siguiente string llamado "word"?

Posibles opciones:
  - length
  - indexOf
  - find
  - none

------------------------------------------------------------

Conceptos a entender:
  1. Cuál de los siguientes métodos pertenece a los strings?
    a. length
    b. indexOf
    c. find

  2. Cómo funciona el método indexOf()?
    a. Definición
    b. Diagrama https://whimsical.com/youtube-UHP1pRc5k3txvDHNdcHLvp@2Ux7TurymR3srym4tVsk
    c. Ejemplos

  3. Solución

------------------------------------------------------------

Challenge + Solución:
  - https://quiz.typeofnan.dev/string-methods/
  - https://github.com/lndgalante/youtube/blob/master/typeofnan-javascript-quizzes/35-string-methods.js

Links Principales:
  - https://javascript.info/string
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

*/

/*
 1. Cuál de los siguientes propiedades o métodos pertenece a los strings?
    a. length
    b. indexOf
    c. find
*/

/*
La propiedad length y el método indexOf pertenecen a los strings, en cambio el método find pertence a los arrays.
*/

/*
  2. Cómo funciona el método indexOf()?
    a. Definición
*/

/*
- El método indexOf nos devuelve el índice de la primer ocurrencia de un valor especificado,
  si el valor no es encontrado entonces este método va a devolver -1.
*/

/*
  2. Cómo funciona el método indexOf()?
    b. Diagrama https://whimsical.com/youtube-UHP1pRc5k3txvDHNdcHLvp@2Ux7TurymR3srym4tVsk
*/

/*
  2. Cómo funciona el método indexOf()?
    c. Ejemplos
*/

const phrase = 'The quick brown fox jumps';

console.log(`What's the index for "T"? ${phrase.indexOf('T')}`);

console.log(`What's the index for "The"? ${phrase.indexOf('The')}`);

console.log(`What's the index for "quick"? ${phrase.indexOf('quick')}`);

console.log(`What's the index for "fox"? ${phrase.indexOf('fox')}`);

/*
3. Solución

Posibles opciones:
  - length
  - indexOf
  - find
  - none
*/

const word = 'The bird is the word';

console.log(`What's the index for "bird"? ${phrase.indexOf('bird')}`);
