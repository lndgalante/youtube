// ---------------------------------------------------

// Como hacemos para re-utilizar un tipo en TypeScript?
// Es decir cuál es el concepto similar a las funciones pero en el mundo del tipado?
// Para ello usamos los Generics que nos permite

// ---------------------------------------------------

// Pongamos un ejemplo donde tenemos la siguiente respuesta de un endpoint

const firstResponse = {
  data: {
    count: 12,
  },
  error: {
    hasError: false,
    message: '',
  },
};

// El tipado se vería algo así

type Error = {
  hasError: boolean;
  message: string;
};

type Response = {
  data: {
    count: number;
  };
  error: Error;
};

// ---------------------------------------------------

// En otro endpoint tenemos esta otra respuesta

const secondResponse = {
  data: {
    userIds: [112, 324, 921],
  },
  error: {
    hasError: false,
    message: '',
  },
};

// El tipado se vería algo así

type Error = {
  hasError: boolean;
  message: string;
};

type Response = {
  data: {
    userIds: number[];
  };
  error: Error;
};

// ---------------------------------------------------

// Vemos que el tipado de Error nunca cambia
// pero el tipado para la key "data" si varía según lo que nos envie cada endpoint
// Para ello usaremos un Generic en el tipo de Response, el cuál llamaremos "T"
// Donde "T" puede ser cualquier tipo que enviemos, y lo asignaremos a la key "data"
// y esto nos va a permitir re-utilizar Response para ambos casos

type Error = {
  hasError: boolean;
  message: string;
};

type ResponseGeneric<T> = {
  data: T;
  error: Error;
};

type DataCount = { count: number };

type DataUserIds = { userIds: number[] };

type FirstResponse = Response<DataCount>;

type SecondResponse = Response<DataUserIds>;

// ---------------------------------------------------
