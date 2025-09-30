// application/controllers/common_controller.js
import Router from 'koa-router';
import { requireLogin } from '../../configs/middlewares.js';

const router = new Router();

// Definir la ruta principal
router.get('/', requireLogin, async (ctx) => {
  await ctx.render('common/home', { mensaje: '¡Hola, Koa con EJS y controladores!' });
});

// Definir otra ruta
router.get('/sign-in', async (ctx) => {
  var messages = ""; //ctx.flash(); // Obtener mensajes flash
  await ctx.render('/common/sign-in', { messages: messages }); 
});

export default router;
