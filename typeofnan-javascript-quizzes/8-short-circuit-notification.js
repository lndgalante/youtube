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
  1. Tablas de verdad

  2. Solución

------------------------------------------------------------

Extra:
  -

Challenge + Solución:
  - https://quiz.typeofnan.dev/short-circuit-notifications
  - https://github.com/lndgalante/youtube/blob/master/typeofnan-javascript-quizzes/8-short-circuit-notification.js

Links Principales:
  -

Links Secundarios:
  -

*/

const notifications = 1;

console.log(`You have ${notifications} notification${notifications !== 1 && 's'}`);
