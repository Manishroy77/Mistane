const mongoose = require('mongoose');
const personSchema =new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    age:{
        type: Number,
        required : true
    },
    work: {
        type : String,
        required : true,
        enum : ["chef", "manager", "waiter"]
    },
    email: {
        type : String,
        required: true,
        unique : true
    },
    address: {
        type : String,
        required : true
    },
    salary: {
        type : Number,
    }
})

const person = mongoose.model('person', personSchema);

module.exports = person;