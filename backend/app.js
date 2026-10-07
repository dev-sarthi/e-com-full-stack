const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const products=require('./data.js');


app.use(cors());
app.use(bodyParser.json());

const port=process.env.PORT || 3000;

app.get('/api/products',(req,res)=>{
    res.json(products);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});