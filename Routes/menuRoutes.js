const express = require('express');
const routes = express.Router();

const menu = require('../Models/menuSchema');

routes.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const newMenu = new menu(data);
        const response = await newMenu.save();
        console.log('Data saved');
        res.status(200).json(response); 
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'})
    }
})

routes.get('/',async(req,res)=>{
    try{
      const data = req.body;
      const response = await menu.find();
      console.log('data fatecd');
      res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'})   
    }
})


module.exports = routes;