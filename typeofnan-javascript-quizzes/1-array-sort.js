/*

Challenge:
  Array Sort Comparison

Descripción:
  Considerando los siguientes arrays.
  Que se loguea en las diferentes condiciones de ordenamiento?

Posibles opciones:
  - true true true
  - true true false
  - false false false
  - true false true

Opción generada:
  - X Y Z => true true false

--------------------

Conceptos a entender:
  - const e inmutabilidad
  - método sort() + ej
  - doble igual y triple igual comparando arrays/objetos + ej
*/

/*
- const e inmutabilidad

Const no nos indica inmutabilidad, solamente nos indica que no podemos re-asignar la constante
es decir que podemos modificar o mutar cualquier posición del array o key del objeto.

Ejemplo:
arr1[0] = 'd'
console.log('arr1', arr1)
*/

/*
- método sort() + ej

El método sort muta u ordena el array al que se le esta aplicando el método,
y nos devuelve el mismo array o la referencia al mismo.


console.log('arr2 - original', arr2) //  ['b', 'c', 'a']
console.log('arr2 - ordenado', arr2.sort()) //  ['a', 'b', 'c']
console.log('arr2 - original', arr2) //  ['a', 'b', 'c']

En comparación a otros métodos populares como map, filter y reduce que si devuelven un nuevo array y no modifican el original.

*/

/*
- doble igual y triple igual comparando arrays/objetos + ej

Cuando comparamos arrays u objetos estamos comparando la referencia en memoria y no estamos comparando el contenido

Ejemplo:
const arr3 = []

console.log('Comparar 2 arrays con doble igual', arr3 == arr3)
console.log('Comparar 2 arrays con triple igual', arr3 === arr3)

*/

const arr1 = ['a', 'b', 'c']
const arr2 = ['b', 'c', 'a']

console.log('Primer ordenamiento: ', arr1.sort() === arr1)
console.log('Segundo ordenamiento: ', arr2.sort() == arr2)
console.log('Tercer ordenamiento: ', arr1.sort() === arr2.sort())
