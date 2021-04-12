/*

Challenge:
  Array to Object Efficiency

Descripción:
  Tanto a como b son objetos con las mismas propiedades y valores.
  Cuál es creado más eficientemente?

Posibles opciones:
  - a
  - b

------------------------------------------------------------

Conceptos a entender:
  1. Performance
    a. Cuando deberíamos preocuparnos por la performance?
    b. Que ventajas y desventajas nos trae una abstracción?

  2. API console.time()
    a. Qué hace esta API? Hagamos nuestra función benchmark
    b. Ejemplo obteniendo un array a partir de un string: split, spread y Array.from()

  3. Benchmarks Online
    a. Como funcionan los benchmarks? Qué significa ops/s?
    b. Usemos el mismo ejemplo anterior usando JSBench https://jsbench.me

  4. Solución
    a. Benchmark en JSBench: https://jsbench.me/zlkndnoubb/1

------------------------------------------------------------

Extra:
  a. Plataformas similares:
    - JSBench:   https://jsben.ch
    - Perflink: https://perf.link
    - ESBench: https://esbench.com

  b. API performance.now()

Challenge + Solución:
  - https://quiz.typeofnan.dev/array-object-efficiency
  - https://github.com/lndgalante/youtube/blob/master/typeofnan-javascript-quizzes/13-array-to-object-efficiency.js

Links Principales:
  - https://developer.mozilla.org/en-US/docs/Web/API/Console/time

Links Alternativos:
  - https://developer.mozilla.org/en-US/docs/Web/API/Performance/now

*/

/*
4. Solución
  a. Benchmark en JSBench: https://jsbench.me/zlkndnoubb/1
*/
const arr = [1, 2, 3];

const a = arr.reduce((acc, el, i) => ({ ...acc, [el]: i }), {});

const b = {};

for (let i = 0; i < arr.length; i++) {
  b[arr[i]] = i;
}
