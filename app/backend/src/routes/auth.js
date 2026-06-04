import { Router } from 'express';
import { superAdminLogin, restroLogin, getMe } from '../controllers/auth.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.post('/superadmin/login', superAdminLogin);
router.post('/restro/login', restroLogin);
router.get('/me', requireAuth, getMe);

export default router;
