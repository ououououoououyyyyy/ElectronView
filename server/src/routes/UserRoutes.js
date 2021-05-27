import {Router} from 'express';

import UserController from '../controllers/UserController.js';

const UserRoutes = new Router();

UserRoutes.post('/', UserController.create);
UserRoutes.get('/', UserController.getAll);
UserRoutes.get('/:id', UserController.getOne);
UserRoutes.put('/ ', UserController.update);
UserRoutes.delete('/:id', UserController.delete);

export default UserRoutes;
