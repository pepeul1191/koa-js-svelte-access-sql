// index.js
import Koa from 'koa';
import Router from 'koa-router';
import render from 'koa-ejs';
import path from 'path';
import { fileURLToPath } from 'url';
import serve from 'koa-static';
import logger from './configs/middlewares.js';
import bootstrap from './configs/bootstrap.js'; 

const app = new Koa();
const router = new Router();

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos desde la carpeta public
app.use(serve(path.join(__dirname, 'public')));

// Usar el middleware de logging
app.use(logger);
// Configurar EJS
render(app, {
  root: path.join(__dirname, 'views'), // Ruta a las vistas
  layout: false, // Si no quieres usar un layout
  viewExt: 'ejs', // Extensión de las vistas
  cache: false, // Desactivar caché en desarrollo
});

// Usar el router configurado en bootstrap
app.use(bootstrap.routes()).use(bootstrap.allowedMethods());

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
