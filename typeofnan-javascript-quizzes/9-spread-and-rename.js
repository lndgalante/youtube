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
  1. Valores por referencia

  2. Operador spread (propagador) + Ejemplo abecedario
    a. Qué es el operador spread?
    b. Cómo se utiliza?

  4. Solución
    a. Diagrama en Whimsical

------------------------------------------------------------

Challenge + Solución:
  - https://quiz.typeofnan.dev/spread-and-rename
  - https://github.com/lndgalante/youtube/blob/master/typeofnan-javascript-quizzes/9-spread-and-rename.js

Links Principales:
  - https://github.com/HackYourFutureBelgium/just-javascript/tree/master/08-mutation

Links Secundarios:
  -

*/

const firstArray = [{ firstName: 'James' }];
const secondArray = [...firstArray];

secondArray[0].firstName = 'Jonah';

console.log(firstArray);

/*

 2. Operador spread (propagador) + Ejemplo abecedario
    a. Qué es el operador spread?
      El operador spread nos permite propagar los elementos de un iterable en otro.
      Por ej un iterable puede ser un string, un array, y un Set.

    b. Cómo se utiliza?
        const characters = ['a', 'b', 'c']
        const characters2 = ['d', 'e', 'f']

        const allCharacters = [...characters, ...characters2]
        console.log('allCharacters', allCharacters)

  */
