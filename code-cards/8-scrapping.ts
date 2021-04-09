// ---------------------------------------------------

// Definamos un helper para quitar el simbolo "$" de un string y devolver un número
export const parseDollarValue = (value: string) => Number(value.replace('$', ''));

// Definamos unas constantes que contienen los selectores donde se encuentran los valores del dolar
export const BASE_URL = 'https://dolarhoy.com';
export const BLUE_DOLLAR_BUY_SELECTOR = '.tile.is-parent.is-5 .values .compra .val';
export const BLUE_DOLLAR_SELL_SELECTOR = '.tile.is-parent.is-5 .values .venta .val';

// ---------------------------------------------------

// Importemos Cheerio que se encargará de darnos una API similar a jQuery,
// recreando un DOM a partir de texto HTML y poder por ejemplo obtener elementos a partir de sus selectores

import { cheerio } from 'https://deno.land/x/cheerio@1.0.4/mod.ts';

// Importemos ahora el tipado de Oak, este es un framework HTTP que incluye un router
// Oak es a Deno lo que Express es a Node, pero inspirado en Koa
import { Context } from 'https://deno.land/x/oak/mod.ts';

// Importemos nuestro helper y constantes de lib
import {
  parseDollarValue,
  BASE_URL,
  BLUE_DOLLAR_BUY_SELECTOR,
  BLUE_DOLLAR_SELL_SELECTOR,
} from 'https://deno.land/x/cheerio@1.0.4/mod.ts';

// Definamos un controller o controlador que se encargara de:
//  1. Obtener el HTML de 'https://dolarhoy.com'
//  2. Generar un DOM a partir de nuestro HTML con el método .load()
//  3. Obtener el precio de compra y venta con el método .text() y nuestros selectores ya definidos
//  4. Asignemos al body de la respuesta lo que quisieramos devolver
//  5. En caso que algo falle en nuestra lógica vamos a enviar un error 500

export const getDollar = async ({ response }: Context) => {
  try {
    const res = await fetch(BASE_URL);
    const html = await res.text();

    const $ = cheerio.load(html);
    const buy = $(BLUE_DOLLAR_BUY_SELECTOR).text();
    const sell = $(BLUE_DOLLAR_SELL_SELECTOR).text();

    response.body = { buy: parseDollarValue(buy), sell: parseDollarValue(sell) };
  } catch (error) {
    response.status = 500;
  }
};

// ---------------------------------------------------

// Importemos el Router de Oak
import { Router } from 'https://deno.land/x/oak/mod.ts';

// Importemos nuestro controlador
import { getDollar } from './controllers';

// Creemos una instancia de nuestro router
// Definamos una ruta "/dolar" donde podemos solo hacerle un GET
// Cuando se haga una llamada a la misma ejecutaremos "getDollar"

export const router = new Router();
router.get('/dolar', getDollar);

// ---------------------------------------------------

// Importemos Application de Oak
import { Application } from 'https://deno.land/x/oak/mod.ts';

// Importemos nuestro router
import { router } from './router';

// Creemos una instancia de nuestro servidor
const app = new Application();

// Agreguemos a nuestra app las rutas y los métodos soportados
// En nuestro caso sería "/dolar" y el método "GET"
app.use(router.routes());
app.use(router.allowedMethods());

// Corramos nuestra aplicación en el puerto 3000
await app.listen({ port: 3000 });

// ---------------------------------------------------
