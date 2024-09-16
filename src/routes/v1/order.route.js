import { Router } from 'express';
import validate from '~/middlewares/validate';
import { validateSchemaCreateOrder, validateSchemaGetOrderById } from '~/validators/data.validation';
import resolve from '~/utils/ResolveRequest';
import { getOrderById, postCreateOrder, putUpdateOrder } from '~/controller/order.controller';

const router = Router();

router.post('/', /*authenticate,*/ validate(validateSchemaCreateOrder),  resolve(postCreateOrder));
router.get('/:orderId', /*authenticate,*/ validate(validateSchemaGetOrderById),  resolve(getOrderById));
router.put('/', /*authenticate,*/ validate(validateSchemaCreateOrder),  resolve(putUpdateOrder));

export default router;