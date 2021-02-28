/*
1. Valores falsos o falsy values
- String vacio o empty string
- Número cero
- NaN
- null
- undefined
- false
*/

const value = 0;

// Si value es un valor falso por ejemplo 0 entonces el operador || nos devolverá 10
const numberToDisplay = value || 10; // 10

/* --------------------------- */

const value = 0;

// Pero quizás nosotros queremos mostrar 0 por pantalla y accidentalmente mostramos 10
// Para ello usamos el operador ??, llamado nullish coalescing
const numberToDisplay = value ?? 10; // 0

/* --------------------------- */

const value = null;

// Si value es undefined o null entonces el operador ?? nos devolverá 10
const numberToDisplay = value ?? 10; // 10
