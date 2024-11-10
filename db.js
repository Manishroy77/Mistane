const mongoose = require('mongoose');
require('dotenv').config();
//const mongoUrlLocal = process.env.mongoUrlLocal;
const mongoUrlLocal = process.env.mongoUrlOnline;

//const mongoUrl = 'mongodb+srv://roy:admin@cluster0.g3iiw.mongodb.net/HOUSE';

mongoose.connect(mongoUrlLocal);
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Database server connect')
});
db.on('disconnected',()=>{
    console.log('Database server disconnected')
});


module.exports = db;