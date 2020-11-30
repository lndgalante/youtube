/*

Challenge:
  Prototypal Inheritance

Descripción:
  En esta ocasión, tenemos a un constructor Dog y tanto la instancia como el prototype del constructor conoce el método speak.
  Qué se loguea por pantalla en el ejemplo cuando le pedimos a nuestra instancia dog que ejecute speak?

Posibles opciones:
  - woof
  - arf

------------------------------------------------------------

Conceptos a entender:
  1. Qué es la herencia?

  2. Tipos de datos estructurales
    a. Funciones, Arrays, Objetos, Dates y los wrappers para los datos primitivos
    b. Creemos una función "displayYear", usemos instanceof y agreguemos una propiedad a una función

  3. Qué es un Constructor o Clase?
    a. Creemos un constructor "Character", que reciba name, power, y un método llamado levelUp

  4. Qué es el prototype?
    a. Creemos una instancia "goku" usando el constructor "Character"
    b. Donde vive el prototype de una instancia?
    c. Llamemos a valueOf() de nuestra instancia. Qué es el prototype chain?
    d. Donde vive este método? Usemos el método hasOwnProperty() para corroborarlo.

  5. Solución
    a. Qué pasa si logueamos el método speak() de la instancia y del constructor?
    b. Qué pasa si comentamos el método speak() del constructor?
    c. Conclusión (+ Excalidraw)

  6. Mejores prácticas
    a. Por qué queremos que el método speak() viva en el prototype y no en su constructor?
    b. Como podemos escribir el constructor Dog usando la keyword Class?

------------------------------------------------------------

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

console.log(dog.speak());
