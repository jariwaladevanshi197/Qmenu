import { Router } from 'express';
import {
  getRestaurantBySlug, getMenu, placeOrder, getMyOrder,
  callWaiter, sendFeedback, verifyOtp, getReadyOrders,
} from '../controllers/customer.js';
import { publicWriteLimiter } from '../middleware/rateLimit.js';

const router = Router();

router.get('/restro/:slug', getRestaurantBySlug);
router.get('/restro/:slug/menu', getMenu);
router.post('/restro/:slug/order', publicWriteLimiter, placeOrder);
router.get('/restro/:slug/order/:ordercode', getMyOrder);
router.post('/restro/:slug/waiter', publicWriteLimiter, callWaiter);
router.post('/restro/:slug/feedback', publicWriteLimiter, sendFeedback);
router.post('/restro/:slug/verify-otp', publicWriteLimiter, verifyOtp);
router.get('/restro/:slug/ready', getReadyOrders);

export default router;
