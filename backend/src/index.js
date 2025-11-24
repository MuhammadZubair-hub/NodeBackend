import dotenv from 'dotenv'
import express, { json } from 'express'
import jokesRouter from './routes/jokes.js';
import productRouter from './routes/product.js';
import mongoose from 'mongoose';
import orderRouter from './routes/order.js';
import { ConnectDB } from './db/index.js';

dotenv.config({
  path :'./.env'
})


const app = express();
const port = 5000
app.use(express.json());

app.use('/api',jokesRouter);
app.use('/api/p',productRouter);
app.use('/api/o',orderRouter);



ConnectDB().then(()=>{
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
}).catch((e)=>{console.log(e)})




// app.use(cors());

// var options = {
//   origin: 'http://localhost:8081',
//   optionsSuccesStatus: 200

// };
