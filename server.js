const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const port = process.env.port;



const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.get('/',(req,res)=>{
    res.send('Modified website');
})


const personRoutes = require('./Routes/personRoutes');
const menuRoutes = require('./Routes/menuRoutes');

app.use('/Person',personRoutes);
app.use('/menu',menuRoutes);

app.listen(port,()=>{
    console.log("server lisning on port")
})