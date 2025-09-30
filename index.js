// index.js
import Koa from 'koa';
import render from 'koa-ejs';
import path from 'path';
import { fileURLToPath } from 'url';
import serve from 'koa-static';
import session from 'koa-session';
import middlewares from './configs/middlewares.js';
import helpers from './configs/helpers.js';
import bootstrap from './configs/bootstrap.js'; 

const app = new Koa();

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Servir archivos estáticos desde la carpeta public
app.use(serve(path.join(__dirname, 'public')));
// Configurar el middleware de sesión
app.keys = ['tu_clave_secreta'];
const SESSION_CONFIG = {
  key: 'koa:sess', // clave de la cookie
  maxAge: 86400000, // 24 horas
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false,
};
app.use(session(SESSION_CONFIG, app));
// Mensajes flash
app.use(helpers.flash);
// Usar el middlewares
app.use(middlewares.logger);
app.use(middlewares.headers);
// Configurar EJS
render(app, {
  root: path.join(__dirname, 'views'), // Ruta a las vistas
  layout: false, // Si no quieres usar un layout
  viewExt: 'ejs', // Extensión de las vistas
  cache: false, // Desactivar caché en desarrollo
});
// Usar el router configurado en bootstrap
app.use(bootstrap.routes()).use(bootstrap.allowedMethods());
// Usar el middleware notFound
app.use(middlewares.notFound);
// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
