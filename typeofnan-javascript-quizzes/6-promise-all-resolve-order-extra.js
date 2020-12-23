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

Challenge + Solución:
  - https://quiz.typeofnan.dev/promise-all-resolve-order
  - https://github.com/lndgalante/thinking-through-code/blob/master/typeofnan-javascript-quizzes/6-promise-all-resolve-order.js

Links Principales:
  - https://javascript.info/async
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

Links Secundarios:
  - https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke
  - https://dev.to/hem/gif-cheatsheet-for-javascript-promise-api-methods-promise-all-promise-allsettled-promise-race-promise-any-1l2o

*/

/*
  - Ejemplo de Promise.all() usando la RickAndMorty API

    Vamos a crear nuestra función que nos permite obtener todos los personajes de un episodio
      a. Pedimos los datos del primer capítulo de Rick and Morty
      b. Usando la key characters vamos a pedir todos los personajes de ese capítulo usando Promise.all()

*/

/*
  - Caveats de Promise.all() y el nuevo Promise.allSettled()

    - Usemos la misma función pero en el primer personaje escribamos una API manualmente
    - Visualizaciones de @Hem
    - Modifiquemos nuestra función para utilizar Promise.allSettled()
*/

/*
  - Convirtiendo una instancia de XMLHttpRequest en una Promise
*/
