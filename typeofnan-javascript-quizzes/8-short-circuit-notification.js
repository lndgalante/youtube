/*

Challenge:
  Short-Circuit Notification(s)

Descripción:
  Let's display some notifications to our user! What gets logged in the following snippet?

Posibles opciones:
  - You have 1 notification
  - You have 1 notifications
  - Something else

------------------------------------------------------------

Conceptos a entender:
  1. Valores falsos o falsy values
      - String vacio o empty string
      - Número cero
      - NaN
      - null
      - undefined
      - false

  2. Conjunción y Corto-circuito, tabla de verdad https://excalidraw.com/#json=6675477808807936,kk5ywu_v7TBxrYfFadQKtw
      a. Ejemplo de && como operador lógico y control de flujo, permisos a entrada con 2 condiciones

  3. Visualización

  4. Solución

------------------------------------------------------------

Extra:
  - Ejercicios de práctica

Challenge + Solución:
  - https://quiz.typeofnan.dev/short-circuit-notifications
  - https://github.com/lndgalante/youtube/blob/master/typeofnan-javascript-quizzes/8-short-circuit-notification.js

Links Principales:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation

Links Secundarios:
  - https://javascript.info/logical-operators#and
  - https://www.joshwcomeau.com/operator-lookup?match=logical-and

*/

/*
1. Valores falsos o falsy values
    - String vacio o empty string
    - Número cero
    - NaN
    - null
    - undefined
    - false
*/
/*
console.log('JS - Falsy values - Six in Total');

console.log('Empty string', Boolean(''));

console.log('Number zero', Boolean(0));

console.log('NaN', Boolean(NaN));

console.log('undefined', Boolean(undefined));

console.log('null', Boolean(null));

console.log('false', Boolean(false));
 */

/*
2. Conjunción y Corto-circuito, tabla de verdad https://excalidraw.com/#json=5524765540352000,bs0gr5NJ-e_HBOXVxVLrBQ
    En resumen si A es verdadero, entonces el operador && devuelve B, de caso contrario devuelve A.
    Sabemos que los valores que A puede tomar para ser verdadero son todos los que no estan incluidos en los falsy values vistos.
    Lo importante a conocer del corto-circuito es que si el valor de A es falso entonces B no se va a evaluar.

    a. Ejemplo de && como operador lógico y control de flujo, permisos a entrada con 2 condiciones

*/

/* const age = 19;
const hasVipPass = true;

if (age > 18 && hasVipPass === true) {
  console.log('Puede entrar al bar');
} else {
  console.log('Entrada denegada');
} */

/*
3. Visualización
    Testiemos los valores falsos y alguno verdadero
*/

/*
4. Solución
    a. Hagamos un pequeño refactor al código.
    b. Pensemos que nos devuelve la expresión "hasManyNotifications && 's'".
    c. Usemos el visualizador para ver que nos devuelve la expresión anterior.

  Posibles opciones:
    - You have 1 notification
    - You have 1 notifications
    - Something else
*/

const notifications = 4;

const hasManyNotifications = notifications > 1;

console.log(`You have ${notifications} notification${hasManyNotifications ? 's' : ''}`);

/*
Extra:
  - Ejercicios de práctica
*/

// 1. Que devuelve el siguiente log?

const date = new Date();

console.log(date.getFullYear() === 2021 && date.getMonth() === 0 && 'Enero 2021!');

// 2. Que debo de hacer para mostrar el último string?
const isBeachOpen = true;
const celsiusDegrees = 22;

console.log(celsiusDegrees > 25 && isBeachOpen === true && 'Vayamos a la playa!');
