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

  3. Visualización

  4. Solución

------------------------------------------------------------

Extra:
  -

Challenge + Solución:
  - https://quiz.typeofnan.dev/short-circuit-notifications
  - https://github.com/lndgalante/youtube/blob/master/typeofnan-javascript-quizzes/8-short-circuit-notification.js

Links Principales:
  - https://www.joshwcomeau.com/operator-lookup?match=logical-and

Links Secundarios:
  -

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
  En resumen si A es verdadero, entonces el operador && devuelve B, de caso contrario devuelve A.
*/

/*
3. Visualización
  Testiemos los valores verdaderos
*/

/*
4. Solución
  Compilemos mentalmente y después usemos el visualizador para ver que nos devuelve "notifications !== 1 && 's'"
*/
