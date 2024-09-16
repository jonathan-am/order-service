import Joi from 'joi';

const schemaMessageOrder = Joi.object().keys({
    id: Joi.number(),
    payment: Joi.object({
        type: Joi.string().trim(false).required(),
        identifier: Joi.string().trim(false).required(),
        status: Joi.string().required()
    }).required(),
    fraudCheck: Joi.boolean().required(),
    status: Joi.string().required(),
    item: Joi.object({
        name: Joi.string().trim().required(),
        quantity: Joi.number().integer().required(),
        unitPrice: Joi.number().required(),
    }).required(),
    value: Joi.number().required(),
    billing: Joi.object({
        name: Joi.string().trim(false).required(),
        lastname: Joi.string().trim(false).required(),
        address: Joi.string().trim().required()
    }).required()
})

export const validateSchemaGetOrderById = {
    params: Joi.object().keys({
        orderId: Joi.number().required()
    })
}


export const validateSchemaCreateOrder = {
    body: schemaMessageOrder
}

export default {
    validateSchemaCreateOrder,
    validateSchemaGetOrderById
}