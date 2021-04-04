import { cheerio } from 'https://deno.land/x/cheerio@1.0.4/mod.ts';
import { Router, Application, Context } from 'https://deno.land/x/oak/mod.ts';

// helpers
const parseDollarValue = (value: string) => Number(value.replace('$', ''));

// constants
const BASE_URL = 'https://dolarhoy.com';
const BLUE_DOLLAR_BUY_SELECTOR = '.tile.is-parent.is-5 .values .compra .val';
const BLUE_DOLLAR_SELL_SELECTOR = '.tile.is-parent.is-5 .values .venta .val';

// controller
const getDollar = async ({ response }: Context) => {
  const res = await fetch(BASE_URL);
  const html = await res.text();

  const $ = cheerio.load(html);
  const buy = $(BLUE_DOLLAR_BUY_SELECTOR).text();
  const sell = $(BLUE_DOLLAR_SELL_SELECTOR).text();

  response.body = { buy: parseDollarValue(buy), sell: parseDollarValue(sell) };
};

// router
const router = new Router();
router.get('/dolar', getDollar);

// app
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });
