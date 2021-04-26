// ---------------------------------------------------

// Como funciona Promise.any() y cuál es la diferencia con Promise.race()?

// Promise.any se agrego en el spec ES2020.
// Esta se resuelve cuando al menos una de las promesas se resuelva
// es decir, se devolverá el valor de la primer promesa que se resuelva.

// La firma de la función, es igual que Promise.all(), recibe un array de promesas
Promise.any(arrayDePromesas);

// ---------------------------------------------------

// Veamos un ejemplo, creemos primero un array de promesas
// La primer promesa se resolverá con el valor "Goku"
// La segunda promesa se rechazará con un objeto de error
// La tercer promesa se resolverá despues de 1 segundo con el valor "Vegeta"

const promisesArray = [
  Promise.resolve('Goku'),
  Promise.reject(new Error('Ups, tuvimos un error')),
  new Promise((resolve) => setTimeout(() => resolve('Vegeta'), 1000)),
];
const result2 = await Promise.race(promisesArray);

const result = await Promise.any(promisesArray);

// Cuál de las promesas se resolvió por éxito primero?
// Tenemos 2 promesas que se resuelven por éxito en el array, el primer y el tercer elemento
// Como la última se resuelve después de 1 segundo, la ganadora es la promesa que devuelve Goku

console.log(result); // "Goku"

// ---------------------------------------------------

// En caso que todas las promesas sean rechazadas
// Promise.any nos devolverá el siguiente error:

// "Uncaught AggregateError: All promises were rejected"

// ---------------------------------------------------

// Cuál es la diferencia con Promise.race()?

// Promise.race en cambio devuelve el valor de la primer promesa resuelta
// Usemos el mismo array de promesas pero movamos el Promise.reject()
// a la primer posición de nuestro array de promesas

const promisesArray2 = [
  Promise.reject(new Error('Ups, tuvimos un error')),
  Promise.resolve('Goku'),
  new Promise((resolve) => setTimeout(() => resolve('Vegeta'), 1000)),
];

const result2 = await Promise.race(promisesArray);

// Como el Promise.reject() es la primer promesa que se resuelve
// entonces este es el valor que devolverá Promise.race()

console.log(result2); // "Uncaught Error: Ups, tuvimos un error"
