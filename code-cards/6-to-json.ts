// Qué es la función toJSON()?

// En JavaScript el método JSON.stringify(obj)
// busca funciones llamadas "toJSON" en el objeto "obj" a serializar.

// Si el objeto tiene una o más funciones toJSON(),
// JSON.stringify() llama a toJSON() y serializa el valor retornado por toJSON()

// Creemos un objeto de ejemplo

const gandalfTheGrey = {
  id: 23,
  name: 'Gandalf The Grey',
  message: { toJSON: () => '🧙🏼 You shall not pass! ⚔️ ' },
};

// Que pasa si pasamos gandalfTheGrey por JSON.stringify()?

const json = JSON.stringify(gandalfTheGrey);

// {"id":23,"name":"Gandalf","message":"🧙🏼 You shall not pass! ⚔️ "}

// Lo bueno sobre toJSON() es que JavaScript maneja la recursividad por nosotros
// Sin importar que tan nesteado este esta función igualmente se va a ejecutar

const gandalfTheWhite = {
  id: 24,
  name: 'Gandalf The White',
  message: {
    for: {
      theoden: {
        toJSON: () => 'Your fingers would rember their strength better, if they grasped your sword. 🗡',
      },
    },
  },
};

const json2 = JSON.stringify(gandalfTheWhite);
console.log(json2);

// {"id":24,"name":"Gandalf The White","message":{"for":{"theoden":"Your fingers would rember their strength better, if they grasped your sword. 🗡"}}}
