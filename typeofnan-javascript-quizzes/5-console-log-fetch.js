/*

Challenge:
  Console log fetch

Descripción:
  Qué se loguea cuando tratamos de loguear fetch?

Posibles opciones:
  - La función fetch
  - Un error de referencia
  - Depende según el ambiente que estemos

------------------------------------------------------------

Conceptos a entender:
  1. Qué son los engines?

  2. Qué son los ambientes? Tipos de ambientes

  3. Diagrama de APIs de JavaScript, del Navegador, de Node.js y Deno

  4. Creemos una función para conocer en qué ambiente nos encontramos

  5. Solución

------------------------------------------------------------

Extra:
  - Feature request de fetch en Node.js
    https://github.com/nodejs/node/issues/19393

  - Next.js con built-in fetch
    https://nextjs.org/docs/basic-features/supported-browsers-features#server-side-polyfills

Links:
- https://quiz.typeofnan.dev/console-log-fetch/
- https://deno.land/manual@v1.6.0/runtime/web_platform_apis
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

*/

/*


1. Qué son los engines?
    Un engine es un programa responsable de convertir nuestro código fuente a código máquina o bytecode
    y posteriormente ejectuar este último en la CPU.
    Todos los engines implementan las definiciones del lenguaje que son provistas por ECMAScript.

    Siendo el engine más conocido "V8" que son utilizados en Google Chrome, Edge, Brave, Node.js y Deno,
    SpiderMonkey en Firefox o JavaScriptCore o Nitro en Safari.

2. Qué son los ambientes? Tipos de ambientes
    En el desarrollo web no usamos los engines directamente sino que estos viven dentro de un ambiente,
    que además de las APIs de JavaScript que son provistas por el engine, cada ambiente trae consigo
    su set particular de APIs que nos permiten conectar el mundo de alrededor con el engine.
    Algunos ejemplos de funcionalidades son el acceso a Bluetooth o el acceso sistema de archivos.

    Actualmente a grandes rasgos tenemos 3 ambientes:
    - Los navegadores (Chrome, Firefox, Safari siendo los más conocidos)
    - Node.js
    - Deno

3. Diagrama de APIs de JavaScript, del Navegador, de Node.js y Deno

4. Creemos dos funciones para conocer en qué ambiente nos encontramos
    a. isNode()
    b. isBrowserOrDeno()

5. Solución

*/
