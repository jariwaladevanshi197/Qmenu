import { Router } from 'express';
import { requireRestroAdmin, requireStaffPage } from '../middleware/auth.js';
import {
  getActiveOrders, confirmOrder, completeOrder, cancelOrder,
  mergeOrders, getOrderHistory, getSingleHistory, getReport,
  getFeedback, deleteFeedback, getWaiterRequests, dismissWaiterRequest,
  markOrderPaid, getCustomers,
} from '../controllers/orders.js';

const router = Router();

router.use(requireRestroAdmin);

const orders = requireStaffPage('orders');

// The restaurant layout polls active orders + waiter calls for every signed-in
// user (badges/alerts), so these reads are open to all staff.
router.get('/active', getActiveOrders);
router.patch('/:id/confirm', requireStaffPage('orders', 'kitchen'), confirmOrder);
router.patch('/:id/complete', requireStaffPage('orders', 'kitchen'), completeOrder);
router.patch('/:id/cancel', orders, cancelOrder);
router.patch('/:id/mark-paid', orders, markOrderPaid);
router.post('/merge', orders, mergeOrders);

router.get('/history', requireStaffPage('history'), getOrderHistory);
router.get('/history/:id', requireStaffPage('history'), getSingleHistory);
router.get('/report', requireStaffPage('report'), getReport);

router.get('/customers', requireStaffPage('customers'), getCustomers);

router.get('/feedback', requireStaffPage('feedback'), getFeedback);
router.delete('/feedback/:id', requireStaffPage('feedback'), deleteFeedback);

router.get('/waiter', getWaiterRequests);
router.delete('/waiter/:id', requireStaffPage('notifications'), dismissWaiterRequest);

export default router;
