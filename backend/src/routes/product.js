import express from 'express'
import { addStock, deleteProducts, getProducts } from '../controllers/product.js';

const productRouter = express.Router();



productRouter.get('/getProduct',getProducts)
.post('/addProduct',addStock)
.post('/deleteProduct',deleteProducts);


export default productRouter;