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

  2. Conjunción, tabla de verdad https://excalidraw.com/#json=5524765540352000,bs0gr5NJ-e_HBOXVxVLrBQ
      a. Ejemplo de && como operador lógico, chequear rango de edad

  3. Corto-circuito, tabla de verdad https://excalidraw.com/#json=5524765540352000,bs0gr5NJ-e_HBOXVxVLrBQ
      a. Ejemplo de && como operador de control de flujo, permisos a entrada con 2 condiciones

  4. Visualización

  5. Solución

------------------------------------------------------------

Challenge + Solución:
  - https://quiz.typeofnan.dev/short-circuit-notifications
  - https://github.com/lndgalante/youtube/blob/master/typeofnan-javascript-quizzes/8-short-circuit-notification.js

Links Principales:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation

Links Secundarios:
  - https://www.joshwcomeau.com/operator-lookup?match=logical-and

*/

const notifications = 1;

console.log(`You have ${notifications} notification${notifications !== 1 && 's'}`);

/*
1. Valores falsos o falsy values
    - String vacio o empty string
    - Número cero
    - NaN
    - null
    - undefined
    - false
*/

console.log('JS - Falsy values - Seven in Total');

console.log('Empty string', Boolean(''));

console.log('Number zero', Boolean(0));

console.log('NaN', Boolean(NaN));

console.log('null', Boolean(null));

console.log('undefined', Boolean(undefined));

console.log('false', false);

/*
2. Conjunción, tabla de verdad https://excalidraw.com/#json=5524765540352000,bs0gr5NJ-e_HBOXVxVLrBQ
    a. Ejemplo de && como operador lógico, chequear rango de edad
*/

/*
3. Corto-circuito, tabla de verdad https://excalidraw.com/#json=5524765540352000,bs0gr5NJ-e_HBOXVxVLrBQ
    En resumen si A es verdadero, entonces el operador && devuelve B, de caso contrario devuelve A.
    Sabemos que los valores que A puede tomar para ser verdadero son todos los que no estan incluidos en los falsy values vistos.
    Lo importante a conocer del corto-circuito es que si el valor de A es falso entonces B no se va a evaluar.

    a. Ejemplo de && como operador de control de flujo, permisos a entrada con 2 condiciones, y por último devolver ticket
*/

/*
4. Visualización
  Testiemos los valores verdaderos
*/

/*
5. Solución
  Hagamos un pequeño refactor al código.
  Pensemos que nos devuelve la expresión "hasManyNotifications && 's'".
  Usemos el visualizador para ver que nos devuelve la expresión anterior.
*/
