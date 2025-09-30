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
  var messages = ""; 
  await ctx.render('/common/sign-in', { messages: messages }); 
});

router.post('/sign-in', async (ctx) => {
  ctx.flashError('Debes de llenar los campos');
  console.log('xddddddddd');
  ctx.redirect('sign-in');
  return;
});

export default router;
