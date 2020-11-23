/*

Challenge:
  Prototypal Inheritance

Descripción:
  En esta pregunta, tenemos a un constructor Dog.
  Nuestro perro obviamente conoce el método speak.
  Qué se loguea en el siguiente ejemplo cuando le pedimos a Pogo que ejecute speak?

Posibles opciones:
  - woof
  - arf

--------------------

Conceptos a entender:
  1. Qué es un Constructor? (llamado Clases en otros lenguajes)
  2. Qué es el prototype?
  3. Ejemplo de constructor Person, con propiedad name
     Agreguemos otra propiedad prototype lastName al prototype.
     Donde vive el mismo? Usemos el método hasOwnProperty()
  4. Qué es el __proto__? Comparemoslo con el prototype de nuestro constructor

--------------------

Parte II:
  -

Links:
  - https://quiz.typeofnan.dev/prototypal-inheritance/

*/

function Dog(name) {
  this.name = name;

  this.speak = function () {
    return 'woof';
  };
}

const dog = new Dog('Pogo');

Dog.prototype.speak = function () {
  return 'arf';
};

console.log(dog.speak.toString());
console.log(dog.__proto__.speak.toString());

/*

Agregar diagramas con Excalidraw!!

1. Qué es un Constructor o Prototype? (llamado Clases en otros lenguajes)
Es un plano a partir del cuál podemos crear instancias con la misma forma.
Más conocido como clases en otros lenguajes e introducidas en ES6, el cuál utiliza prototype por debajo.


2. Qué es el prototype?
Todos los objetos de JavaScript tienen una propiedad prototype,
lo cuál hace que la herencia sea posible en JavaScript.

Esta propiedad es un objeto donde ponemos los métodos y propiedades que queremos que otros objetos hereden.

La propiedad prototype del Constructor NO es el prototype del COnstructor mismo, es el prototype de TODAS las
instancias que se crearon a través de él.

Cuando un cierto método o propiedad es llamado, la búsqueda empieza en el objeto mismo, y si no puede ser encontrada,
la búsqueda se mueve hacia el prototype del objeto. La misma continúa hasta que el método es encontrado en la cadena de prototype.



----

Cuando agregamos la función speak al prototype de Dog, no la estamos agregrando al constructor
sino justamente a su prototype, entonces cuando llamamos al método speak
siguiendo la cadena de prototype o la prototype chain
primero JS buscara el método en el mismo objeto y posteriormente en su prototype

como el método speak() vive en el mismo objeto, llamará a este y no seguirá buscando en la prototype chain


Usemos el __proto__ para entender que son distintos métodos

console.log(dog.speak.toString());
console.log(dog.__proto__.speak.toString());


*/
