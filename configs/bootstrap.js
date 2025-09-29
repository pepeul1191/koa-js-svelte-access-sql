// configs/bootstrap.js
import Router from 'koa-router';
import commonController from '../application/controllers/common_controller.js'; // Importar el controlador

const router = new Router();

// Montar los controladores
router.use(commonController.routes()).use(commonController.allowedMethods());

export default router;