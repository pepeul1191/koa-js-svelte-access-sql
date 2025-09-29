import Router from 'koa-router';

const router = new Router();

// Definir la ruta principal
router.get('/', async (ctx) => {
  await ctx.render('common/home', { mensaje: '¡Hola, Koa con EJS y controladores!' });
});

// Definir otra ruta
router.get('/about', async (ctx) => {
  await ctx.render('about', { mensaje: 'Acerca de esta aplicación.' });
});

export default router;
