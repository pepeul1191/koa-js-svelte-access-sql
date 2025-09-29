// configs/middlewares.js
const logger = async (ctx, next) => {
  const start = Date.now();
  await next(); // Espera a que se complete la siguiente función middleware
  const ms = Date.now() - start;
  
  // Agregar el código de estado a los logs
  console.log(`${ctx.method} ${ctx.url} - ${ctx.status} - ${ms}ms`);
};

export default logger;