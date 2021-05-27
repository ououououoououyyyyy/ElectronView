import {Router} from 'express';
import AuthController from '../controllers/AuthController.js';
import {loginValidator, registrationValidator} from '../middleware/AuthMiddleware/Validators.js';
import {ValidateRequest} from '../middleware/ValidateRequest.js';


const AuthRouter = new Router();

AuthRouter.post('/registration', [...registrationValidator, ValidateRequest], AuthController.registration);
AuthRouter.post('/login', [...loginValidator, ValidateRequest], AuthController.login);

export default AuthRouter;
