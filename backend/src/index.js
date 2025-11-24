import dotenv from 'dotenv'
import express, { json } from 'express'
import jokesRouter from './routes/jokes.js';
import productRouter from './routes/product.js';
import mongoose from 'mongoose';
import orderRouter from './routes/order.js';
// import { ConnectDB } from './db/index.js';

dotenv.config({
  path: './.env'
})


const app = express();

app.use(express.json());

app.use('/api', jokesRouter);
app.use('/api/p', productRouter);
app.use('/api/o', orderRouter);



// ConnectDB().then(() => {
//   app.listen(process.env.PORT, () => {
//     console.log(`Example app listening on port ${process.env.PORT}`)
//   });
// }).catch((e) => { console.log(e) });



const ConnectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_Name}`);
    console.log('Monog DB conncects yar  || ', process.env.DB_Name);
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`)
    })

  } catch (error) {
    console.log('Mongo DB conncects nai ho yar  || ');

  }
};


ConnectDB();

export default app;


// app.use(cors());

// var options = {
//   origin: 'http://localhost:8081',
//   optionsSuccesStatus: 200

// };
