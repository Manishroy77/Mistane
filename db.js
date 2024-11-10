const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/HOUSE');
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Database server connect')
});
db.on('disconnected',()=>{
    console.log('Database server disconnected')
});


module.exports = db;