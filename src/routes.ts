import {Router} from 'express';
import {AuthenticateUserController} from './controllers/AuthenticateUserController';
import {CreateMessageController} from './controllers/CreateMessageController';
import {Get3LastMessagesController} from './controllers/Get3LastMessagesController';
import {ensureAuthenticated} from './middleware/EnsureAuthenticated';
import {ProfileUserController} from './controllers/ProfileUserController';

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

router.get("/messages/last3", new Get3LastMessagesController().handle);

router.post("/profile", ensureAuthenticated, new ProfileUserController().handle);

export {router};