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
      a. Visualización con XState
      b. Ejemplo con setTimeout

  2. Cómo funciona Promise.all()?
      a. Visualización con XState
      b. Use-case usando RickAndMorty API

------------------------------------------------------------

Extra:
  - Caveats de Promise.all() y el nuevo Promise.allSettled()

Links:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled

*/

function timer(a) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a), Math.random() * 100);
  });
}

Promise.all([timer('first'), timer('second')]).then((data) => console.log(data));
