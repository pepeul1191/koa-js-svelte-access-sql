// configs/bootstrap.js
import Router from 'koa-router';
import commonController from '../application/controllers/common_controller.js';
import systemController from '../application/controllers/systems_controller.js';

const router = new Router();

// Montar los controladores
router.use(commonController.routes()).use(commonController.allowedMethods());
router.use(systemController.routes()).use(systemController.allowedMethods());

export default router;