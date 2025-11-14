console.log('first node backend file');

require('dotenv').config();
console.log(process.env.PORT);


const express = require('express');

const app = express();

const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/fb',(req,res)=>{
    res.send('Zubair@gmail.coii')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})