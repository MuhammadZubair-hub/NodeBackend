

import express from 'express'
import jokesRouter from './jokes.js';
import productRouter from './product.js';
import orderRouter from './order.js';
import adminRouter from './admin.js';
import { adminLogin } from '../controllers/admin.js';
import { addOrders, getPerviousOrder } from '../controllers/order.js';
import { addStock, deleteProducts, getProducts } from '../controllers/product.js';
import { deleteJokes, getJoke, getJokes, postJokes, updatedJokes } from '../controllers/jokes.js';


const router = express.Router();



router.post('/login',adminLogin)
.post('/createOrder',addOrders)
.get('/getperviousorder',getPerviousOrder)
.get('/getProduct',getProducts)
.post('/addProduct',addStock)
.post('/deleteProduct',deleteProducts)
.post('/addJokes', postJokes)
.get('/jokes', getJokes)
.get('/jokes/:id', getJoke)
.patch('/updatejokes',updatedJokes )
.delete('/deleteJokes/:id',deleteJokes );

export default router;