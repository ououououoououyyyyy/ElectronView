import {Router} from 'express';

import UserRoutes from './UserRoutes.js'
import AuthRouter from './AuthRouter.js'
import Auth from '../middleware/AuthMiddleware/Auth';

const router = new Router();

router.use('/user', UserRoutes);
router.use('/auth', AuthRouter);
router.use('/mainPage', Auth, AuthRouter);


export default router;
