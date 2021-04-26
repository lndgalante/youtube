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
    c. Ejemplo de comparación de DayJS vs Date nativo
        https://codepen.io/dciesielkiewicz/pen/gOYvZRv

  2. Setup de funciones para testear
    a. Definamos las funciones splitTextBySplitMethod, splitTextBySpreadOperator, splitTextByArrayFrom

  3. API console.time()
    a. Qué hace esta API? Hagamos una prueba sencilla con un for-loop
    b. Creemos una función benchmark y testiemos el tiempo que toma ejecutar las funciones del punto 2

  4. API performance.now()
    a. Qué hace esta API? Hagamos nuestra función calculateFunctionsPerformance,
       que le podamos enviar funciones por parámetros y nos devuelva cuanto tarda la ejecución de cada una.
  b. Creemos nuestra función calculateFunctionsPerformance y testiemos el tiempo que toma ejecutar las funciones del punto 2

  5. Benchmarks Online
    a. Testiemos el tiempo que toma ejecutar las funciones del punto 2 usando JSBench https://jsbench.me

  6. Solución
    a. Benchmark en JSBench: https://jsbench.me/zlkndnoubb/1

------------------------------------------------------------

Extra:
  a. Plataformas similares:
    - JSPerf:   https://jsben.ch
    - JSBench:   https://jsben.ch
    - Perflink: https://perf.link
    - ESBench: https://esbench.com

Challenge + Solución:
  - https://quiz.typeofnan.dev/array-object-efficiency
  - https://github.com/lndgalante/youtube/blob/master/typeofnan-javascript-quizzes/13-array-to-object-efficiency.js

Links Principales:
  - https://developer.mozilla.org/en-US/docs/Web/API/Console/time
  - https://developer.mozilla.org/en-US/docs/Web/API/Performance/now

*/

/*
1. Performance
  a. Cuando deberíamos preocuparnos por la performance?
*/

/*
  Deberíamos de preocuparnos por la performance solo cuando encontramos un problema o cuello de botella,
  el cuál por ejemplo en frontend se puede traducir como una UI lenta en responder, una vez encontrado el problema,
  posteriormente utilizamos herramientas para poder detectar la raíz del mismo, analizarlo y posteriormente ver como solucionarlo.
  Realizar pre-optimizaciones nos lleva a invertir recursos para un problema que todavía no existe.

  Por ejemplo: si tengo una lista de un alto fijo, scrolleable, con más de 1000 elementos, probablemente ya quiera tener
  en mente alguna solución para manejar listas virtualizadas, es decir renderizar los elementos que se visualizan en ese alto fijo.
  Pero en caso que esta lista cuente solamente con 20-30 elementos, no tiene sentido pre-optimizar, ya que estamos solucionando
  un problema que todavía no existe y quizás nunca exista.
*/

/*
1. Performance
  b. Qué ventajas y desventajas nos trae una abstracción?
*/

/*
  Las abstracciones suelen traer como gran ventaja, como la palabra lo dice, abstraernos de un nivel más bajo,
  por ejemplo: una librería de manejo de fechas como dayjs nos trae una API muy amigable pero pagamos una "multa",
  la multa es un costo mayor en tiempo de ejecución por más que sea indeferenciable en milisegundos.
  En resumen una abstracción siempre nos trae una mejor experiencia como desarrolladores pero por el otro lado al abstraernos
  con más código, vamos a pagar esta multa donde nuestra abstracción va a tardar más que sino la tuvieramos.
  Pero como mencionamos antes no tenemos que preocuparnos, al menos que realmente exista un problema real que tengamos que preocuparnos.
*/

/*
1. Performance
  c. Ejemplo de comparación de DayJS vs Date nativo
      https://codepen.io/dciesielkiewicz/pen/gOYvZRv
*/

/*
2. Setup de funciones para testear
    a. Definamos las funciones splitTextBySplitMethod, splitTextBySpreadOperator, splitTextByArrayFrom
*/

function splitTextBySplitMethod(text) {
  return text.split('');
}

function splitTextBySpreadOperator(text) {
  return [...text];
}

function splitTextByArrayFrom(text) {
  return Array.from(text);
}

/*
3. API console.time()
  a. Qué hace esta API? Hagamos una prueba sencilla con un for-loop
*/

/*
  Esta API mide en milisegundos cuanto tiempo toma en ejecutarse una pieza de código.
  Esta API se utiliza usando 2 funciones: console.time() y console.timeEnd(),
  pasandoles a ambas un label o identificador que tiene que ser el mismo.
  Tenemos que definir nuestro código entre la ejecución de time() y timeEnd().
*/

console.time('for-loop');

const numbers = [];

for (let i = 0; i < 1000; i++) {
  numbers.push(`Number ${i}`);
}

console.timeEnd('for-loop');

/*
3. API console.time()
  b. Creemos una función benchmark y testiemos el tiempo que toma ejecutar las funciones del punto 2
*/

function bechnmark(label, fnToMeasure) {
  console.time(label);
  fnToMeasure();
  console.timeEnd(label);
}

// bechnmark('split-text-by-split-method', () => splitTextBySplitMethod('Barcelona'));
// bechnmark('split-text-by-spread-method', () => splitTextBySpreadOperator('Barcelona'));
// bechnmark('split-text-by-array-from-method', () => splitTextByArrayFrom('Barcelona'));

/*
4. API performance.now()
  a. Qué hace esta API? Hagamos una prueba sencilla con un for-loop
*/

/*
  Esta es una API del navegador, la cuál nos devuelve un timestamp y podemos calcular el tiempo
  que toma una pieza de código de manera más exacta, como también poder calcular la diferencia en porcentaje de tiempo entre 2 snippets.
*/

const initialTimestamp = performance.now();

const numbers2 = [];

for (let i = 0; i < 1000; i++) {
  numbers2.push(`Number ${i}`);
}

const finalTimestamp = performance.now();

const elapsedTime = finalTimestamp - initialTimestamp;
// console.log('\n ~ elapsedTime', elapsedTime);

/*
4. API performance.now()
  b. Creemos nuestra función calculateFunctionsPerformance y testiemos el tiempo que toma ejecutar las funciones del punto 2
*/

function calculateFunctionsPerformance(...functions) {
  const results = [];

  for (const fn of functions) {
    const name = fn?.name ?? fn.toString();

    const startTime = performance.now();
    fn();
    const finalTime = performance.now();

    results.push({ fn: name, elapsedTime: finalTime - startTime });
  }

  return results;
}

const benchmarkResults = calculateFunctionsPerformance(
  () => splitTextBySplitMethod('Barcelona'),
  () => splitTextBySpreadOperator('Barcelona'),
  () => splitTextByArrayFrom('Barcelona'),
);

// console.log('\n ~ benchmarkResults', benchmarkResults);

/*
  5. Benchmarks Online
    a. Testiemos el tiempo que toma ejecutar las funciones del punto 2 usando JSBench https://jsbench.me
*/

/*
6. Solución
  a. Benchmark en JSBench: https://jsbench.me/zlkndnoubb/1
*/

function reduceLogic() {
  const arr = [1, 2, 3];

  const a = arr.reduce((acc, el, i) => ({ ...acc, [el]: i }), {});
}

function forLogic() {
  const arr = [1, 2, 3];

  const b = {};
  for (let i = 0; i < arr.length; i++) {
    b[arr[i]] = i;
  }
}

console.log(calculateFunctionsPerformance(reduceLogic, forLogic));

/*
6. Solución
  b. Qué hace que la solución elegida sea más rápida?
*/

/*
  La opción a es menos performante ya que :
  - Utiliza un reduce lo cuál es una abstracción por encima del for-loop
  - Cada vez que ejecutamos nuestro callback devolvemos un nuevo objeto, y hacemos un spread de accumulator,
    y tanto crear un nuevo objeto como realizar un spread del acumulador es costoso.

  En cambio la opción b solo ingresa un nueva key "arr[i]" con valor "i" al objeto b y nada más
*/
