import { Router } from 'express';
import {
  getRestaurantBySlug, getMenu, placeOrder, getMyOrder,
  callWaiter, sendFeedback, verifyOtp,
} from '../controllers/customer.js';

const router = Router();

router.get('/restro/:slug', getRestaurantBySlug);
router.get('/restro/:slug/menu', getMenu);
router.post('/restro/:slug/order', placeOrder);
router.get('/restro/:slug/order/:ordercode', getMyOrder);
router.post('/restro/:slug/waiter', callWaiter);
router.post('/restro/:slug/feedback', sendFeedback);
router.post('/restro/:slug/verify-otp', verifyOtp);

export default router;
