const user = {
  name: 'Michael',
};

// Falla con el siguiente error:
// "Uncaught TypeError: Cannot read property 'city' of undefined"
// Queremos acceder a una propiedad de undefined y este no es un objeto
const city = user.address.city;

// Funciona pero es muy verboso de escribir
// Más aún si tenemos muchas propiedades que chequear
let city = 'Sin ciudad definida';

const hasAddressProperty = user.address !== undefined && user.address !== null;

if (hasAddressProperty) {
  city = user.address.city;
}

// Funciona pero necesitamos un método de una librería externa
// Lo cuál nos agrega una dependencia más a nuestro proyecto
const city = _.get(user, 'address.city', 'Sin ciudad definida');

// Lo solucionamos con el optional chaining y nullish coalescing
// Si alguna de las keys que va buscando no existe, este devuelve undefined
// En caso que no exista el nullish coalesing devuelve "Sin ciudad definida"
const city = user?.address?.city ?? 'Sin ciudad definida';
