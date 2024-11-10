const mongoose = require('mongoose');
const menuSchema =new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    price:{
        type: Number,
        required : true
    },
    taste: {
        type : String,
        required : true,
        enum : ["sweet", "spicy", "sour"]
    },
    is_drink: {
        type : Boolean,
        required: true,
    },
    ingredients: {
        type : [String],
        required : true,
        default : []
    },
    num_sales: {
        type : Number,
        default : 0
    }
})

const menu = mongoose.model('menuItems', menuSchema);

module.exports = menu;