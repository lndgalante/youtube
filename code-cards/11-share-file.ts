// ---------------------------------------------------

// Como hacemos para compartir un archivo rápidamente sin necesidad de subirlo a la nube?
// Vamos a usar 2 herramientas para lograr esto: serve y ngrok

// ---------------------------------------------------

// Primero necesitamos tener instalado Node.js
// En la siguiente URL tenes los ejecutables: https://nodejs.org/en/download/
// Opcionalmente si soles usar Node como herramienta diaria te recomiendo que lo instales usando NVM

// ---------------------------------------------------

// Vamos a crear una carpeta y depositar los archivos que necesitemos ahí
// Corramos el comando (sin las comillas) "mkdir shared_files"
// Ahora movamos todos los archivos que necesitemos compartir a esta carpeta

// ---------------------------------------------------

// Vamos a correr un servidor HTTP para poder servir nuestros archivos estáticos
// Simplemente lo vamos a correr usando el siguiente comando (sin las comillas): "npx serve shared_files"
// Este servidor por defecto va a estar corriendose en el puerto 5000

// ---------------------------------------------------

// Por último necesitamos que alguien fuera de nuestra red local pueda acceder a nuestros archivos
// Para ello vamos a necesitar instalar ngrok descargando de la siguiente URL: https://ngrok.com/download
// Ahora vamos a correr ngrok en el puerto de nuestro servidor HTTP usando: "ngrok http 5000"
// Nos copiamos la url que empieza con HTTPS y la compartamos a quien necesite acceder a nuestros archivos
