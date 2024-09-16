import logger from "~/config/logger"
import { createOrder, requestOrderById, updateOrder } from "~/services/order.service"

export const postCreateOrder = async (req, res) => {
    try {
        const result = await createOrder(req.body)
        res.status(201).send(result)
    }catch(error) {
        logger.error(`Erro ao criar o pedido, message:`, error)
        throw error;
    }
}

export const getOrderById = async (req, res) => {
    try {
        const result = await requestOrderById(req.params.orderId)
        res.status(200).send(result)
    }catch(error) {
        logger.error(`Erro ao buscar o pedido, message:`, error)
        throw error;
    }
}

export const putUpdateOrder = async (req, res) => {
    try {
        const result = await updateOrder(req.body);
        res.status(200).send(result)
    }catch(error) {
        logger.error(`Erro ao atualizar o pedido, message:`, error)
        throw error;
    }
}

export default {
    postCreateOrder,
    getOrderById,
    putUpdateOrder
}