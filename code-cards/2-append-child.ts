// 1. Creemos algunos elementos
const padre = document.createElement('div');
const hijo = document.createElement('h1');

// 2. Agreguemos un texto al h1
hijo.innerText = 'Veamos la append API';

// 3. Con append() podemos enviar un Node por parámetros
padre.append(hijo);

/* 👇 Resultado 👇
  <div>
    <h1>Veamos la append API</h1>
  </div>
*/

// 4. También podemos enviar un DOMString por parámetros, básicamente un texto
padre.append('Texto agregado al div');

/* 👇 Resultado 👇
  <div>
    <h1>Veamos la append API</h1>
    Texto agregado al div
  </div>
*/

// 5. Opcionalmente: los 2 últimos append() lo podemos realizar en una sola linea,
//    Serán appendeados en el mismo orden de los parámetros enviados
padre.append(hijo, 'Texto agregado al div');

// 6. Por último agregamos el elemento padre al body
document.querySelector('body').append(padre);

/* 👇 Resultado 👇
  <body>
    <div>
      <h1>Veamos la append API</h1>
      Texto agregado al div
    </div>
  </body>
*/

/* ------------------------------------------------------------ */

// 1. Creemos algunos elementos
const padre = document.createElement('div');
const hijo = document.createElement('h1');

// 2. Agreguemos un texto al h1
hijo.innerText = 'Veamos la appendChild API';

// 3. Con appendChild() solo acepta un Node por parámetros
//    También nos devuelve el nodo enviado por parámetros
const appendedChild = padre.appendChild(hijo);

// Siendo appendedChild el nodo: <h1>Veamos la appendChild API</h1>

/* 👇 Resultado 👇
  <div>
    <h1>Veamos la append API</h1>
  </div>
*/

// 4. Por último agregamos el elemento padre al body
document.querySelector('body').appendChild(padre);

/* 👇 Resultado 👇
  <body>
    <div>
      <h1>Veamos la append API</h1>
    </div>
  </body>
*/

/* ------------- */

// Las 3 diferencias entre append() y appendChild() son:

/*
  1. append() acepta un Node y un DOMString, en cambio appendChild() solo un Node
  2. append() acepta más de un parámetro, en cambio appendChild() acepta un solo parámetro
  3. appendChild() devuelve el nodo appendeado y append() no devuelve nada (undefined)
*/
