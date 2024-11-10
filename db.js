const mongoose = require('mongoose');
//const mongoUrl = 'mongodb://localhost:27017/HOUSE';
const mongoUrl = 'mongodb+srv://roy:admin@cluster0.g3iiw.mongodb.net/HOUSE';

mongoose.connect(mongoUrl);
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Database server connect')
});
db.on('disconnected',()=>{
    console.log('Database server disconnected')
});


module.exports = db;