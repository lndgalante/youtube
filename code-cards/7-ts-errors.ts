function sum(a: number, b: number) {
  return a + b;
}

// @ts-ignore
sum(2, 2);

// @ts-expect-error
sum(2, 2);

// En TypeScript 3.9 se introdujo un nuevo comentario para manejar errores
// llamado @ts-expect-error, pero que tiene de diferente con @ts-ignore?
// Veamos sus diferencias y que sucede en nuestro código

// Lo primero que vemos en los snippets de código
// es que sino tenemos ningún error @ts-expect-error
// nos va decir que esta directiva esta sin usar
// Lo cuál nos ayuda para recordarnos de eliminar el comentario
// cuando nosotros arreglemos el error que esperabamos

// Ahora cuando usar uno u otro?
// Veamos que nos dice el equipo oficial de TypeScript

// Elegí @ts-expect-error si:
// - Estas escribiendo tests donde actualmente queres que el sistema de tipado tenga un error en una operación
// - Esperas un fix que se va a realizar en el corto plazo y necesitas una solución rápida en el momento
// - Tu proyecto tiene un tamaño razonable con un equipo pro-activo que quiere eliminar comentarios de supresión tan rápido como el código afectado es válido de nuevo

// Elegí @ts-ignore si:
// - Tenes un proyecto grande y nuevos errores han aparecido en el código sin un dueño claro
// - Estás en el medio de una actualización entre 2 diferentes versiones de TypeScript, y ya tenes lineas de errores de código en una versión pero no en otra
// - Hoenestamente no tenes tiempo de decidir cual de las opciones es mejor
