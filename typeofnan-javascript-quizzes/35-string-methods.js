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
    a. Definición y ejemplo
    b. Propiedades y características
    c. Diagrama https://whimsical.com/youtube-UHP1pRc5k3txvDHNdcHLvp@2Ux7TurymR3srym4tVsk
    d. Ejemplos del diagrama

  3. Solución

  4. Extra
    a. Creemos nuestro propio indexOf() usando arrays y con un flag para que sea case-insensitive
    b. Creemos nuestro método includes() usando indexOf() nativo

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
    a. Definición y ejemplo
*/

/*
- El método indexOf nos devuelve el índice de la primer ocurrencia de un valor especificado,
  si el valor no es encontrado entonces este método va a devolver -1.

*/

const title = 'The Lord of the Rings: The Return of the King';

const titleIndexes = title.split('').map((character) => ({ character }));

console.table(titleIndexes);

console.log(title.indexOf('Rings'));

/*
  2. Cómo funciona el método indexOf()?
    b. Propiedades y características
*/

/*

  Propiedades:
  - Case-sensitive

  - Se puede usar para chequear si un substring existe en el string
    Se utilizaba para este caso, antes de que exista el método includes()

  - Se le puede proporcionar un segundo parámetro, siendo este un indice,
    para que busque a partir del indice indicado.

  - Existe lastIndexOf() que en vez de devolver la primer ocurrencia, nos devuelve la última ocurrencia

  - Existe el mismo método en los arrays, para buscar el índice de un elemento
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

const phraseIndexes = phrase.split('').map((character) => ({ character }));

console.table(phraseIndexes);

console.log(`Cuál es el índice de "T"? ${phrase.indexOf('T')}`);

console.log(`Cuál es el índice de "The"? ${phrase.indexOf('The')}`);

console.log(`Cuál es el índice de "quick"? ${phrase.indexOf('quick')}`);

console.log(`Cuál es el índice de "fox"? ${phrase.indexOf('fox')}`);

/*
3. Solución

Posibles opciones:
  - length X
  - indexOf O
  - find X
  - none X
*/

const word = 'The bird is the word';

console.log(`What's the index for "bird"? ${word.indexOf('bird')}`);

/*
  4. Extra
    a. Creemos nuestro propio indexOf() usando arrays y con un flag para que sea case-insensitive
*/

function indexOf(string, substring, isCaseInsensitive = false) {
  const allWords = [];

  for (let index = 0; index < string.length; index++) {
    const word = string.slice(index);
    const parsedWord = isCaseInsensitive ? word.toLowerCase() : word;

    allWords.push({ word: parsedWord, index });
  }

  const parsedSubstring = isCaseInsensitive ? substring.toLowerCase() : substring;
  const word = allWords.find(({ word }) => word === parsedSubstring);

  return word.index ?? -1;
}

console.log(indexOf('The quick', 'quick'));
console.log(indexOf('The quick', 'QUIck', true));

/*
  4. Extra
    b. Creemos nuestro método includes() usando indexOf() nativo
*/

function includes(string, substring) {
  const index = string.indexOf(substring);
  const isFound = index !== -1;

  return isFound;
}