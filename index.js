// index.js
import Koa from 'koa';
import Router from 'koa-router';
import render from 'koa-ejs';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from './configs/middlewares.js'; // Importar el middleware

const app = new Koa();
const router = new Router();

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Usar el middleware de logging
app.use(logger);
// Configurar EJS
render(app, {
  root: path.join(__dirname, 'views'), // Ruta a las vistas
  layout: false, // Si no quieres usar un layout
  viewExt: 'ejs', // Extensión de las vistas
  cache: false, // Desactivar caché en desarrollo
});

// Rutas
router.get('/', async(ctx) => {
  await ctx.render('common/home', { mensaje: '¡Hola, Koa con EJS!' });
});

app.use(router.routes()).use(router.allowedMethods());

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
