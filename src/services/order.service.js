import httpStatus from 'http-status';
import logger from '~/config/logger';
import GenericException from '~/middlewares/handler/Exceptions/GenericException';
import OrderModel from '~/model/order.model';

export const createOrder = async (order) => {
    return await OrderModel.create(order).then((result)=> {
        logger.info(`Succeso ao criar a ordem, result: ${result}`)
        return result;
    }).catch((error)=> {
        logger.error(`Erro ao criar a ordem, msg: ${error}`)
        throw new GenericException(httpStatus.INTERNAL_SERVER_ERROR, 'Error creating order');
    })
}

export const updateOrder = async (order) => {
    return await OrderModel.update(order, {where: { id: order.id } }).then((result)=> {
        logger.info(`Succeso ao atualizar a ordem, result: ${result}`)
        return result;
    }).catch((error)=> {
        logger.error(`Erro ao atualizar a ordem, msg: ${error}`)
        throw new GenericException(httpStatus.INTERNAL_SERVER_ERROR, 'Error updating order');
    })
}

export const requestOrderById = async (id) => {
    return await OrderModel.findByPk(id).then((result)=> {
        logger.info(`find order, result: ${JSON.stringify(result)}`)
        if(result) return result;
        throw new GenericException(httpStatus.NOT_FOUND, 'Order not found');
    }).catch((error)=> {
        logger.error(`Erro ao buscar a order, msg: ${error}`)
        throw new GenericException(httpStatus.NOT_FOUND, 'Order not found');
    })
}

export default {
    createOrder,
    requestOrderById,
    updateOrder
}