const Koa = require('koa');
const app = new Koa();

// Middleware para manejar las solicitudes
app.use(async ctx => {
  ctx.body = '¡Hola, Koa!';
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
