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
  1. Qué es la herencia? (+ Diagrama)

  2. Tipos de datos estructurales
    a. Repaso de los tipos de datos primitivos
    b. Cuáles son los tipos de datos estructurales
    c. Creemos una función "displayYear" que devuelva un string con el año actual
        agreguemos una propiedad "createdAt" a nuestra función, y usemos el operador instanceof.

  3. Qué es un Constructor o Clase?
    a. Creemos un constructor "Character", que reciba name y ki
    b. Creemos una instancia "goku" usando el constructor "Character"

  4. Qué es el prototype?
    a. Agreguemos el método levelUp al prototype de nuestro constructor "Character"
    b. Donde vive el prototype de una instancia?
    c. Llamemos a valueOf() de nuestra instancia. Qué es el prototype chain?
    d. Donde vive este método? Usemos el método hasOwnProperty() para corroborarlo.

  5. Solución
    a. Qué pasa si comentamos el método speak() del constructor?
    c. Conclusión (+ Diagrama)

  6. Mejores prácticas
    a. Por qué queremos que el método speak() viva en el prototype y no en su constructor?
    b. Como podemos escribir el constructor Dog usando la keyword Class?

------------------------------------------------------------

Links:
  - https://javascript.info/prototype-inheritance
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

*/

/*

1. Qué es la herencia? (+ Diagrama)
  La herencia es un mecanismo, proveniente del paradigma orientado a objetos,
  que nos permite crear instancias con los métodos y propiedades definidos en una clase.

2. Tipos de datos estructurales
  a. Repaso de los tipos de datos primitivos
      - number, string, boolean, null, undefined, BigInt y Symbol

  b. Cuáles son los tipos de datos estructurales
      - object, function, array, date, set, map, y otras estructuras creadas con el keyword new

  c. Creemos una función "displayYear" que devuelva un string con el año actual
      agreguemos una propiedad "createdAt" a nuestra función, y usemos el operador instanceof.

*/

function displayYear() {
  const date = new Date();
  return `El año actual es ${date.getFullYear()}`;
}

displayYear();

displayYear.createdAt = new Date().getTime();

/*

3. Qué es un Constructor o Clase?
  Es un plano a partir del cuál podemos crear instancias con la misma forma definida en el mismo.
  Cuando creamos una instancia a partir de un Constructor heredamos todas sus propiedades y métodos.

  La herencia en la mayoría de los lenguajes funciona a través de Clases pero en JavaScript funciona a través del prototype.
  Si bien existe a partir de ES6 (2015) la sintáxis de Clase, por debajo funciona de igual manera usando prototype.

  a. Creemos un constructor "Character", que reciba name y ki

  b. Creemos una instancia "goku" usando el constructor "Character"

*/

function Character(name, ki) {
  this.name = name;
  this.ki = ki;
}

const goku = new Character('Goku', 1000);

/*

4. Qué es el prototype?
  Los objetos tienen una propiedad prototype, lo cuál hace que la herencia sea posible en JavaScript.
  Esta propiedad es un objeto donde podemos definir los métodos y propiedades que queremos que nuestras instancias hereden.

  a. Agreguemos el método levelUp al prototype de nuestro constructor "Character"

  b. Donde vive el prototype de una instancia?
    El prototype vive en la propiedad "__proto__" y se puede visualizar por consola

  c. Llamemos a levelUp() y valueOf() en nuestra instancia. Por qué podemos llamar a estos métodos? Qué es el prototype chain?
    Cuando un cierto método o propiedad es llamado, la búsqueda empieza en el objeto mismo,
    y en caso de no ser encontrada la búsqueda se mueve hacia el prototype del objeto,
    repitiendo esto hasta encontrar el método o propiedad o bien hasta llegar al Object.

  d. Donde vive este método? Usemos el método hasOwnProperty() para corroborarlo.
    El método no vive en si mismo sino en su prototype.

*/

Character.prototype.levelUp = function () {
  this.ki += 10000;
};

/*

  -----

*/

/* function Dog(name) {
  this.name = name;

  this.speak = function () {
    return 'woof';
  };
}

let dog = new Dog('Pogo');

Dog.prototype.speak = function () {
  return 'arf';
};

console.log(dog.speak());
 */

/*

5. Solución
  a. Qué pasa si comentamos el método speak() del constructor?
    Se ejecuta el método de su prototype debido al prototype chain.

  b. Conclusión (+ Diagrama)
    Cuando llamamos al método speak() siguiendo la cadena de prototype primero se buscará el método en la misma instancia
    y en caso que no se encuentre posteriormente en su prototype, siguiendo la cadena de prototype,
    en este caso como existe en el mismo objeto se ejecutará este primer método speak.

*/

/*

  6. Mejores prácticas
    a. Por qué queremos que el método speak() viva en el prototype y no en su constructor?
      Para que cada instancia nueva de Dog no tenga que tener una copia del método,
      sino que viva en un solo lugar "central" que es su prototype,
      por ende consumiendo menos recursos por cada instancia creada.

    b. Como podemos escribir el constructor Dog usando la keyword Class?

*/

class Dog {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return 'woof';
  }
}

let dog = new Dog('Pogo');
