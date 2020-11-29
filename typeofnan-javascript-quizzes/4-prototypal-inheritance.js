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
  1. Qué es la herencia?

  2. Qué es un Constructor o Clase?
      a. Donde vive el prototype de un constructor?

  3. Qué es el prototype?
    a. Donde vive el prototype de una instancia?
    b. Ejemplo de objeto character, y llamamos a toString(). Qué es el prototype chain?

  4. Ejemplo de constructor Person, con propiedad name y hunger.
     Agreguemos un método prototype eat() al prototype.
     Donde vive este método? Usemos el método hasOwnProperty() para corroborarlo.

  5. Solución
    a. Qué pasa si logueamos el método speak() de la instancia y del constructor?
    b. Qué pasa si comentamos el método speak() del constructor?
    c. Conclusión

  6. Mejores prácticas
    a. Por qué queremos que el método speak() viva en el prototype y no en su constructor?

-------------------

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

2. Qué es un Constructor o Clase?
  Es un plano a partir del cuál podemos crear instancias con la misma forma.
  Cuando creamos una instancia a partir de un Constructor heredamos todas sus propiedades y métodos.

  La herencia en la mayoría de los lenguajes funciona a través de Clases, en el caso de JavaScript,
  si bien existe el concepto de Clase como syntactic-sugar, por debajo funciona a través del prototype.

3. Qué es el prototype?

  Los objetos tienen una propiedad prototype, lo cuál hace que la herencia sea posible en JavaScript.
  Esta propiedad es un objeto donde definimos los métodos y propiedades que queremos que otros objetos hereden.

  La propiedad prototype del Constructor NO es el prototype del Constructor mismo, es el prototype de TODAS las
  instancias que se crearon a través de él.

  a. Donde vive el prototype de una instancia?
    El prototype de una instancia vive en la propiedad "__proto__", y se puede visualizar el mismo en la consola.

  b. Ejemplo de objeto "character" y llamemos a toString(). Qué es el prototype chain?
    Cuando un cierto método o propiedad es llamado, la búsqueda empieza en el objeto mismo, y si no puede ser encontrada,
    la búsqueda se mueve hacia el prototype del objeto, y así sucesivamente hasta encontrarlo o bien hasta llegar a Object.


4. Ejemplo de constructor Person, con propiedad name y hunger.
  Agreguemos un método prototype eat() al prototype.
  Donde vive este método? Usemos el método hasOwnProperty() para corroborarlo.

5. Solución:

  a. Qué pasa si logueamos el método speak() de la instancia y del constructor?
    console.log(dog.speak.toString());
    console.log(dog.__proto__.speak.toString());

  b. Qué pasa si comentamos el método speak() del constructor?
    Vemos que por la prototype chain no encuentra el método speak() en su propio objeto y lo va a buscar a su prototype donde si se encuentra y loguea "arf"

  c. Conclusión
    Cuando llamamos al método speak() siguiendo la cadena de prototype primero se buscará el método en la misma instancia
    y en caso que no se encuentre posteriormente en su prototype, siguiendo la cadena de prototype,
    en este caso como existe en el mismo objeto se ejecutará este primer método speak.


6. Mejores prácticas:
    a. Por qué queremos que el método speak() viva en el prototype y no en su constructor?
      Para que cada instancia nueva de Dog no tenga que tener una copia del método,
      sino que viva en un solo lugar "central" que es su prototype,
      por ende consumiendo menos recursos por cada instancia creada.

*/
