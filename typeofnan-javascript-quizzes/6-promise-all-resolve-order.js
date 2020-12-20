/*

Challenge:
  Promise.all Resolve Order

Descripción:
  En esta pregunta, tenemos una función timer que devuelve una Promesa,
  la cuál se resuelve después de una cantidad de tiempo aleatoria.
  Nosotros usamos Promise.all para resolver el array de timers. Qué se loguea?

Posibles opciones:
  - ["first", "second"]
  - Es aleatorio (it is random)

------------------------------------------------------------

Conceptos a entender:
  1. Qué son las Promises?
      a. Visualización de Lavarropa https://xstate.js.org/viz/?gist=dd07469f72636d3f896c5d260ecc7eec
      b. Visualización de Promise https://xstate.js.org/viz/?gist=76e5db32fd56786a27c317205cf881b2
      c. Ejemplo de lavarropa con función cleanClothes(), creación y ejecución
          setTimeout -> wrap con promise

  2. Cómo funciona Promise.all()?
      a. Visualización de lavar la ropa y limpiar la pieza

------------------------------------------------------------

Extra:
  - Ejemplo de Promise.all() usando la RickAndMorty API
  - Caveats de Promise.all() y el nuevo Promise.allSettled()
  - Convirtiendo una instancia de XMLHttpRequest en una Promise


Challenge + Código:
  - https://quiz.typeofnan.dev/promise-all-resolve-order
  - https://github.com/lndgalante/thinking-through-code/blob/master/typeofnan-javascript-quizzes/6-promise-all-resolve-order.js

Links Principales:
  - https://javascript.info/async
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

Links Secundarios:
  - https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke
  - https://dev.to/hem/gif-cheatsheet-for-javascript-promise-api-methods-promise-all-promise-allsettled-promise-race-promise-any-1l2o

*/

function timer(string) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(string), Math.random() * 100);
  });
}

Promise.all([timer('first'), timer('second')]).then((data) => console.log(data));

/*

Posibles opciones:
  - ["first", "second"]
  - Es aleatorio (it is random)

*/

/*

2. Qué son las Promises?
    Una promesa representa un valor que es por el momento desconocido, pero que lo conoceremos en algún momento del futuro.

    a. Visualización de Lavarropa https://xstate.js.org/viz/?gist=dd07469f72636d3f896c5d260ecc7eec

    b. Visualización de Promise https://xstate.js.org/viz/?gist=76e5db32fd56786a27c317205cf881b2

    c. Ejemplo de lavarropa con función cleanClothes(), creación y ejecución
        setTimeout -> wrap con promise

*/

function cleanClothes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isClean = true;

      if (isClean === true) {
        resolve('Clothes are clean');
      } else {
        reject('Clothes are still dirty');
      }
    }, 2000);
  });
}

// cleanClothes()
//   .then((result) => {
//     console.log('\n ~ cleanClothes ~ result', result);
//   })
//   .catch((error) => {
//     console.log('\n ~ cleanClothes ~ error', error);
//   });

/*

2. Cómo funciona Promise.all()?
    a. Visualización de lavar la ropa y limpiar la pieza
    b. Ejemplo usando la cleanClothes() y tidyRoom()

*/

function tidyRoom() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isTidy = true;

      if (isTidy === true) {
        resolve('Room is tidy');
      } else {
        reject('Room is still a mess');
      }
    }, 4000);
  });
}

Promise.all([cleanClothes(), tidyRoom()])
  .then((results) => console.log(results))
  .catch((error) => console.log(error));
