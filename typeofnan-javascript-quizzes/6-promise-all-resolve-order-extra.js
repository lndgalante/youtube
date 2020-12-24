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

const BASE_URL = 'https://rickandmortyapi.com/api';

const get = (url) => fetch(url).then((response) => response.json());

async function getAllCharactersFromEpisode(episode) {
  const { characters: charactersUrls } = await get(`${BASE_URL}/episode/${episode}`);

  const characterPromises = charactersUrls.map((characterUrl) => get(characterUrl));
  const charactersInformation = await Promise.all(characterPromises);

  return charactersInformation;
}

getAllCharactersFromEpisode(1)
  .then((characters) => {
    console.log('Displaying all characters from episode one');
    console.log(characters);
  })
  .catch((error) => {
    console.log('getAllCharactersFromEpisode ~ error', error);
  });

/*
  - Caveats de Promise.all() y el nuevo Promise.allSettled()

    - Usemos la misma función pero en el primer personaje escribamos una API manualmente
    - Modifiquemos nuestra función para utilizar Promise.allSettled()
*/

async function getAllCharactersFromEpisodeImproved(episode) {
  const { characters: charactersUrls } = await get(`${BASE_URL}/episode/${episode}`);

  const characterPromises = charactersUrls.map((characterUrl, index) =>
    get(index === 0 ? `https://rick.com/api/character/1` : characterUrl),
  );
  const charactersInformation = await Promise.allSettled(characterPromises);

  return charactersInformation;
}

getAllCharactersFromEpisodeImproved(1)
  .then((characters) => {
    console.log('Displaying all characters from episode one');
    console.log(characters);
  })
  .catch((error) => {
    console.log('getAllCharactersFromEpisodeImproved ~ error', error);
  });

/*
  - Convirtiendo una instancia de XMLHttpRequest en una Promise
*/

function xmlHttpRequestPromise() {
  return new Promise((resolve, reject) => {
    const BASE_URL = 'https://rickandmortyapi.com/api';

    const request = new XMLHttpRequest();

    request.addEventListener('load', (event) => {
      resolve(JSON.parse(event.target.response));
    });
    request.addEventListener('error', (event) => {
      reject(event);
    });

    request.open('GET', `${BASE_URL}/episode/1`);

    request.send();
  });
}

xmlHttpRequestPromise()
  .then((data) => {
    console.log('\n ~ xmlHttpRequestPromise ~ data', data);
  })
  .catch((error) => {
    console.log('\n ~ xmlHttpRequestPromise ~ error', error);
  });
