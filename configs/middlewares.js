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

// app/configs/middlewares.js

const notFound = async (ctx, next) => {
  await next(); // Llamar al siguiente middleware

  // Si no se encontró la ruta, se establece el estado 404
  if (ctx.status === 404) {
    const isStaticFile = ctx.originalUrl.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico)$/); // Extensiones de archivos estáticos

    if (ctx.method === 'GET') {
      if (ctx.originalUrl.startsWith('/api/')) {
        // Si la URL comienza con /api/, devolver un JSON
        ctx.status = 404;
        ctx.body = {
          status: false,
          error: 'Recurso no encontrado',
          message: `method: ${ctx.method} - path: ${ctx.originalUrl}`, 
          data: null,
        };
      } else if (!isStaticFile) {
        // Si no es un archivo estático, redirigir a la vista de no encontrado
        ctx.status = 404;
        await ctx.render('common/not-found', {
          url: ctx.originalUrl,
          title: 'Página no encontrada'
        });
      } else {
        // Si es un archivo estático, devolver un JSON
        // NADA
      }
    } else {
      // Para métodos diferentes a GET, devolver un JSON
      ctx.status = 404;
      ctx.body = {
        status: false,
        error: 'Recurso no encontrado',
        message: `method: ${ctx.method} - path: ${ctx.originalUrl}`, 
        data: null,
      };
    }
  }
};

export const redirectIfLoggedIn = async (ctx, next) => {
  console.log(ctx.session); // Acceder a la sesión
  if (ctx.session && ctx.session.user) {
    ctx.redirect('/'); // Redirigir a la página principal
  } else {
    await next(); // Continuar con el siguiente middleware
  }
};

export const requireLogin = async (ctx, next) => {
  if (!ctx.session || !ctx.session.user) {
    ctx.flashError('Debes iniciar sesión para continuar'); // Usar flash para mensajes
    ctx.redirect('/sign-in'); // Redirigir a la página de inicio de sesión
  } else {
    await next(); // Continuar con el siguiente middleware
  }
};


export default {
  logger,
  headers,
  notFound,
  redirectIfLoggedIn,
  requireLogin,
};