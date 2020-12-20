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
      c. Ejemplo de lavarropa con función lavarRopa(), creación y ejecución
          setTimeout -> wrap con promise

  2. Cómo funciona Promise.all()?
      a. Visualización de lavar la ropa y limpiar la pieza
      b. Ventajas y porqué debería de usarla
      c. Ejemplo usando la RickAndMorty API

------------------------------------------------------------

Extra:
  - Caveats de Promise.all() y el nuevo Promise.allSettled()
  - Convirtiendo una instancia de XMLHttpRequest en una Promise

Links:
  - https://javascript.info/async
  - https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled

*/

function timer(string) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(string), Math.random() * 100);
  });
}

// Promise.all([timer('first'), timer('second')]).then((data) => console.log(data));

/*

2. Qué son las Promises?
    Una promesa representa un valor que es por el momento desconocido, pero que lo conoceremos en algún momento del futuro.

    a. Visualización de Lavarropa https://xstate.js.org/viz/?gist=dd07469f72636d3f896c5d260ecc7eec

    b. Visualización de Promise https://xstate.js.org/viz/?gist=76e5db32fd56786a27c317205cf881b2

    c. Ejemplo de lavarropa con función cleanClothes(), creación y ejecución
        setTimeout -> wrap con promise

*/
