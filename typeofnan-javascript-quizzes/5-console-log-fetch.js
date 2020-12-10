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
  1. Qué son los ambientes? Tipos de ambientes

  2. Qué son los engines?

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

1. Qué son los ambientes? Tipos de ambientes
    Son aquellos lugares donde nuestro usuario interactua con la aplicación.

    Actualmente a grandes rasgos tenemos 3 ambientes:
    - Los navegadores (Chrome, Firefox, Safari siendo los más conocidos)
    - Node.js
    - Deno

2. Qué son los engines?
    Estas viven en todos los ambientes ya que la implementación de cada API vive en el engine o motor
    que necesita correr cada uno de los ambientes para poder además ejecutar el código JavaScript.
    Siendo el engine más conocido "V8" que son utilizados en Google Chrome, Edge, Brave, Node.js y Deno,
    SpiderMonkey en Firefox o JavaScriptCore en Safari.

3. Diagrama de APIs de JavaScript, del Navegador, de Node.js y Deno

4. Creemos dos funciones para conocer en qué ambiente nos encontramos
    a. isNode()
    b. isBrowserOrDeno()

5. Solución

*/
