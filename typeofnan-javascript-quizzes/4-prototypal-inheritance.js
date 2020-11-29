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

/*
1. Qué es la herencia?
  La herencia es un mecanismo, del paradigma de orientación a objetos,
  que nos permite crear instancias con los métodos y propiedades definidos en una clase.

2. Tipos de datos estructurales
  a. Funciones, Arrays, Objetos, Dates y los wrappers para los datos primitivos
  b. Creemos una función "displayYear", usemos instanceof y agreguemos una propiedad a una función

3. Qué es un Constructor o Clase?
  Es un plano a partir del cuál podemos crear instancias con la misma forma.
  Cuando creamos una instancia a partir de un Constructor heredamos todas sus propiedades y métodos.

  La herencia en la mayoría de los lenguajes funciona a través de Clases, en el caso de JavaScript,
  si bien existe el concepto de Clase como syntactic-sugar, por debajo funciona a través del prototype.

4. Qué es el prototype?

  Los objetos tienen una propiedad prototype, lo cuál hace que la herencia sea posible en JavaScript.
  Esta propiedad es un objeto donde definimos los métodos y propiedades que queremos que otros objetos hereden.

  La propiedad prototype del Constructor NO es el prototype del Constructor mismo, es el prototype de TODAS las
  instancias que se crearon a través de él.

  a. Creemos una instancia "goku" usando el constructor "Character"

  b. Donde vive el prototype de una instancia?
    El prototype de una instancia vive en la propiedad "__proto__", y se puede visualizar el mismo en la consola.

  c. Llamemos a valueOf() de nuestra instancia. Qué es el prototype chain? (+ Excalidraw)
    Cuando un cierto método o propiedad es llamado, la búsqueda empieza en el objeto mismo, y si no puede ser encontrada,
    la búsqueda se mueve hacia el prototype del objeto, y así sucesivamente hasta encontrarlo o bien hasta llegar a Object.

  d. Donde vive este método? Usemos el método hasOwnProperty() para corroborarlo. (+ Excalidraw)

4. Ejemplo de constructor Person, con propiedad name y hunger.
  Agreguemos un método prototype eat() al prototype.
  Donde vive este método? Usemos el método hasOwnProperty() para corroborarlo.

5. Solución:

  a. Qué pasa si logueamos el método speak() de la instancia y del constructor?
    console.log(dog.speak.toString());
    console.log(dog.__proto__.speak.toString());

  b. Qué pasa si comentamos el método speak() del constructor?
    Vemos que por la prototype chain no encuentra el método speak() en su propio objeto y lo va a buscar a su prototype donde si se encuentra y loguea "arf"

  c. Conclusión (+ Excalidraw)
    Cuando llamamos al método speak() siguiendo la cadena de prototype primero se buscará el método en la misma instancia
    y en caso que no se encuentre posteriormente en su prototype, siguiendo la cadena de prototype,
    en este caso como existe en el mismo objeto se ejecutará este primer método speak.

6. Mejores prácticas:
    a. Por qué queremos que el método speak() viva en el prototype y no en su constructor?
      Para que cada instancia nueva de Dog no tenga que tener una copia del método,
      sino que viva en un solo lugar "central" que es su prototype,
      por ende consumiendo menos recursos por cada instancia creada.

    b. Como podemos escribir el constructor Dog  usando la keyword Class?

*/
