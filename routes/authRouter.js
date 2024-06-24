import { Router } from 'express';
import { register, login, logOut } from '../controllers/authController.js';
const router = Router();
import { validateRegisterInput,validateLoginInput } from '../middleware/validationMiddleware.js';

router.post('/register',validateRegisterInput, register);
router.post('/login',validateLoginInput, login);
router.get('/logout', logOut);

export default router;