import { Router } from 'express';
import { requireRestroAdmin } from '../middleware/auth.js';
import {
  getActiveOrders, confirmOrder, completeOrder, cancelOrder,
  mergeOrders, getOrderHistory, getSingleHistory, getReport,
  getFeedback, deleteFeedback, getWaiterRequests, dismissWaiterRequest,
  markOrderPaid,
} from '../controllers/orders.js';

const router = Router();

router.use(requireRestroAdmin);

router.get('/active', getActiveOrders);
router.patch('/:id/confirm', confirmOrder);
router.patch('/:id/complete', completeOrder);
router.patch('/:id/cancel', cancelOrder);
router.patch('/:id/mark-paid', markOrderPaid);
router.post('/merge', mergeOrders);

router.get('/history', getOrderHistory);
router.get('/history/:id', getSingleHistory);
router.get('/report', getReport);

router.get('/feedback', getFeedback);
router.delete('/feedback/:id', deleteFeedback);

router.get('/waiter', getWaiterRequests);
router.delete('/waiter/:id', dismissWaiterRequest);

export default router;
