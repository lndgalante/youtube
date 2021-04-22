// ---------------------------------------------------

// Como podemos usar axios en React?

// Primero instalemos nuestras dependencias:

// npm install axios axios-hooks

// Si usas yarn

// yarn add axios axios-hooks

// ---------------------------------------------------

// Importemos axios
import Axios from 'axios';

// Definamos la URL de nuestra API
const API_URL = 'https://rickandmortyapi.com/api';

// Creemos una instancia de axios con un objeto de configuración
// En ella definimos una URL como base la cuál será nuestra API_URL
export const instance = Axios.create({ baseURL: API_URL });

// ---------------------------------------------------
import useAxios, { configure } from 'axios-hooks';

// Importamos la instancia recién creada
import { instance } from './axios';

// Ejecutemos configure con nuestra instancia
// Lo cuál será usado globalmente cuando llamemos a useAxios
configure({ instance });

// Definamos un componente Character que va a recibir por props
// el id de un personaje, por ejemplo: 1 representando a Rick Sanchez

function Character({ id }) {
  // useAxios nos devuelve un array con 3 elementos
  // pero nos enfocaremos solo en el primero
  // siendo este un objeto con los datos devueltos por la API,
  // un booleano de loading y un valor de error

  // Se usa el desctructuring para obtener este primer elemento
  // y a su vez otro destructuring para obtener las keys del objeto

  // Como nosotros ejecutamos configure
  // y le enviamos una instancia con nuestro baseURL
  // useAxios en esta ocasión va a llamar a la siguiente url:
  // https://rickandmortyapi.com/api/characters/1
  const [{ data, loading, error }] = useAxios(`/characters/${id}`);

  // Si esta cargando mostramos un mensaje de carga
  if (loading) {
    return <p>Loading your favourite character</p>;
  }

  // Si hay un error mostramos un mensaje de error
  if (error) {
    return <p>Ups, algo salió mal</p>;
  }

  // Obtengo el primer elemento de los resultados devueltos por la API
  const [result] = data.results;

  // Por último renderizamos las keys deseadas en nuestro JSX
  return (
    <div>
      <h2>Nombre: {result.name}</h2>
      <img src={result.image} alt={result.name} />
    </div>
  );
}
