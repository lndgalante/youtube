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
  - X Y Z =>

--------------------

Conceptos a entender:
  - método sort() + ej
  - doble igual y triple igual comparando arrays/objetos + ej
*/

const arr1 = ['a', 'b', 'c']
const arr2 = ['b', 'c', 'a']

console.log(arr1.sort() === arr1, arr2.sort() == arr2, arr1.sort() === arr2.sort())
