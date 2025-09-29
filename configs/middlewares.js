// configs/middlewares.js
const logger = async (ctx, next) => {
  const start = Date.now();
  await next(); // Espera a que se complete la siguiente función middleware
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
};

export default logger;
