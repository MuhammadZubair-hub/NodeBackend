import dotenv from 'dotenv'
import express, { json } from 'express'
import mongoose from 'mongoose';
import router from './routes/route.js';
import  YAML  from 'yamljs';
import path from 'path'

import swaggerUI from 'swagger-ui-express'

import { fileURLToPath } from "url";
import cors from 'cors'

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(__filename);


dotenv.config({
  path: './.env'
})


// Load Swagger YAML file
const swaggerDocument = YAML.load(path.join(_dirname, './../swagger.yaml'));

const isProduction = process.env.ISPRODUCTION === 'production';
if (isProduction) {
  console.log(
    'in productions'
  )
  swaggerDocument.servers = [
    { 
      url: "https://nodebackend-production-cbec.up.railway.app",
      description: "Production Server" 
    }
  ];
} else {
  swaggerDocument.servers = [
    { 
      url: `http://localhost:${process.env.PORT || 3000}/api`,
      description: "Local Development Server" 
    }
  ];
}

const app = express();
app.use(express.json());

app.use(cors());

// Serve Swagger documentation
app.use("/api/doc", swaggerUI.serve, swaggerUI.setup(swaggerDocument, {
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "User API Documentation",
}));


app.get('/', (req,res)=>{
  res.json({Hello: 'Hellos'})
})

app.use('/api',router);



app.get('/testing',(req,res)=>{
  res.send('testing is working');
})



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

