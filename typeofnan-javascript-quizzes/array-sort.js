//  1. Array Sort Comparison

/* DESCRIPTION

Consider the following arrays. What gets logged in various sorting conditions?

Options:
  A) true true true
  B) true true false
  C) false false false
  D) true false true

*/

const arr1 = ['a', 'b', 'c'];
const arr2 = ['b', 'c', 'a'];

console.log(arr1.sort() === arr1, arr2.sort() == arr2, arr1.sort() === arr2.sort());

/* RESEARCH

To understand what's the solution we need to understand 2 main concepts:
- loose equality vs strict equality
- sort method

Loose equality is the "==" double equal operator and it converts one of the values that we are comparing to a common type.
I.e:
0 == "0" // this is true since the left zero is going to get converted to a string so we will finally have something like: "0" == "0" then this  will be true
Commonly loose equality is discouraged so please try to avoid it but always remember what it does.

Strict equality is the "===" triple equal operator and it disables the implicit cohersion (what we just saw)
I.e
0 === "0" // this is false since none of them gets converted to a different type to have a type match therefore to be true they have to be the same type and the samevalue

Sort method
The sort method as the name implies help us sorting our elements in the array, optionally if we want a particular sorting we need to use a compare function
Before diving deep on how it works I'm going to start with some practical examples

[15, 4, 30].sort() // => [15, 30, 4] why? That's because each element it gets converted to string and then they are compared

[15, 4, 30].sort((a, z) => a - z) // => [4, 15, 30] Now using a compare function we decided the sort order:
// if the result is less than 0, a comes first
// if the result is greater than 0, z comes first
// equal to 0, there's no change

[15, 4, 30].sort((a, z) => a - z);

[15, 4, 30].sort((4, 15) => 4 - 15);
[15, 4, 30].sort((4, 15) => -11);

[4, 15, 30].sort((30, 15) => 30 - 15);
[4, 15, 30].sort((30, 15) => 15);

[4, 15, 30].sort((4, 30) => 4 - 30);
[4, 15, 30].sort((4, 30) => -26);

So [4, 15, 30] is the final result returned by the sort() method


Disclaimer: An important thing to remember is that the sort method mutates the original array

const numbers = [15, 4, 30];

numbers.sort((a, z) => a - z);

Good practice;

const sortedNumbers = [...numbers].sort((a, z) => a - z);

*/

/* CONCLUSION

It doesn't matter if we use .sort() since we are comparing the reference of each array

*/

const arr1 = ['a', 'b', 'c'];
const arr2 = ['a', 'b', 'c'];

const firstResult = arr1.sort() === arr1; //? true
const secondResult = arr2.sort() == arr2; //? true
const thirdResult = arr1.sort() === arr2.sort(); //? false

// by default arr1.sort() without the compare function will be sorted in ascending order
// when comparing arrays using loose equality or strict equality we are comparing their references and not the values within them
// since arr1.sort() mutates the same reference it does not returns a new array

/*

BONUS

TimSort visualization https://www.youtube.com/watch?v=NVIjHj-lrT4


I'm using "(a, z) => a - z" instead of "(a, b) => a - b" that you will find in all documentation due to a mnemonic reference
https://twitter.com/DavidKPiano/status/1292237580780605440


*/
