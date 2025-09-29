// configs/middlewares.js

// Middleware para agregar logs
const logger = async (ctx, next) => {
  const start = Date.now();
  await next(); // Espera a que se complete la siguiente función middleware
  const ms = Date.now() - start;
  
  // Agregar el código de estado a los logs
  console.log(`${ctx.method} ${ctx.url} - ${ctx.status} - ${ms}ms`);
};

// Middleware para agregar cabeceras
const headers = async (ctx, next) => {
  ctx.set('X-Powered-By', 'Koa'); // Agregar una cabecera personalizada
  ctx.set('Server', 'Ubuntu'); // Permitir CORS (opcional)
  await next(); // Continuar con la siguiente función middleware o ruta
};

export default {
  logger,
  headers,
};