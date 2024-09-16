import { beforeAll, beforeEach, describe, it, vi } from 'vitest';
const request = require('supertest');
import app from '../../src/app';
const orderResponse = await import('../resources/OrderResponse.json', { with: {type: 'json'}});
const orderRequest = await import('../resources/OrderRequest.json', { with: {type: 'json'}});
const orderRequestError = await import('../resources/OrderRequestError.json', { with: {type: 'json'}});

beforeAll(()=> {
    vi.mock('../../src/model/order.model', ()=> ({
        default: {
            create: vi.fn((order)=>new Promise((resolve, reject)=>{
                console.log(order)
                if(order.item.name==="errorMock"){
                    return reject("Erro ao criar a ordem")
                }
                resolve(orderResponse.default)
            })),
            update: vi.fn((order)=>new Promise((resolve, reject)=>{
                if(order.status==="errorMock"){
                    return reject("Erro ao atualizar a ordem")
                }
                resolve([1])})),
            findByPk: vi.fn((id)=>new Promise((resolve, reject)=>{
                if(id===33){
                   return resolve(null)
                }
                if(id===44){
                    return reject("Erro ao selecionar a ordem")
                 }
                resolve(orderResponse.default)})),
        }
    }))
})

beforeEach(vi.restoreAllMocks)

describe('Testes da api', ()=> {
    describe('testes sucesso', ()=> {
        it('case de sucesso', ()=> {
            return request(app).get('/v1/order/1').expect(200, orderResponse.default);
        })
        it('case sucesso create order', ()=> {
            return request(app).post('/v1/order').send(orderRequest.default).expect(201, orderResponse.default);
        })
        it('case sucesso update order', ()=> {
            return request(app).put('/v1/order').send(orderRequest.default).expect(200, [1]);
        })
    })
    describe('cond erros', ()=> {
        it('case de erro get order', ()=> {
            return request(app).get('/v1/order/33').expect(404, {code: 404, msg: 'Order not found'});
        })
        it('case de erro get order 2', ()=> {
            return request(app).get('/v1/order/44').expect(404, {code: 404, msg: 'Order not found'});
        })
        it('case error create order', ()=> {
            return request(app).post('/v1/order').send(orderRequestError.default).expect(500, {code: 500, msg: 'Error creating order'});
        })
        it('case error update order', ()=> {
            return request(app).put('/v1/order').send(orderRequestError.default).expect(500, {code: 500, msg: 'Error updating order'});
        })
        it('case error update order', ()=> {
            return request(app).put('/v1/order').send(null).expect(400, {
                msg: [
                  'body.payment is required',
                  'body.fraudCheck is required',
                  'body.status is required',
                  'body.item is required',
                  'body.value is required',
                  'body.billing is required'
                ],
                code: 400
              });
        })
    })
})