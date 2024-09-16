import { Router } from 'express';
import orderRoute from './order.route';

const router = Router();

router.use('/order', orderRoute);

export default router;
