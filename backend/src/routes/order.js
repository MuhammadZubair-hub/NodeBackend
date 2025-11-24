import express from 'express'
import { addOrders, getPerviousOrder } from '../controllers/order.js';

const orderRouter = express.Router();


orderRouter.post('/createOrder',addOrders).get('/getperviousorder',getPerviousOrder);

export default orderRouter;