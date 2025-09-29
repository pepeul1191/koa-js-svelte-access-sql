// index.js
import Koa from 'koa';
import Router from 'koa-router';
import logger from './configs/middlewares.js'; // Importar el middleware

const app = new Koa();
const router = new Router();

// Usar el middleware de logging
app.use(logger);

// Rutas
router.get('/', ctx => {
  ctx.body = '¡Hola, Koa con ESM y logging desde middlewares.js!';
});

app.use(router.routes()).use(router.allowedMethods());

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
