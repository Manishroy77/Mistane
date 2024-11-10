const express = require('express');
const routes = express.Router();

const person = require('./../Models/personSchema');

routes.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const newPerson = new person(data);
        const response = await newPerson.save();
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
      const response = await person.find();
      console.log('data fatecd');
      res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server error'})
    }
})

routes.get('/:worktype',async(req,res)=>{
    try{
      const worktype = req.params.worktype;
      if(worktype == 'chef'||worktype == 'manager'|| worktype == 'waiter'){
        const response = await person.find({work:worktype});
        console.log('data fatecd');
        res.status(200).json(response);
      }else{
        res.status(404).json({error: 'invalid worktype'})
      }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'})
    }
})

routes.put('/:id',async(req,res)=>{
  try{
    const personId = req.params.id;
    const updatePersonData = req.body;
    const updatePerson = await person.findByIdAndUpdate(personId,updatePersonData,{
      new : true,
      runValidators : true
    });
    if(!updatePerson){
      res.status(404).json({error: 'person not found'})
    }
    res.json(updatePerson);
  }catch(err){
     console.log("Error updating person :",error);
     res.status(500).json({error: 'internal server error'})
  }
})

routes.delete('/:id',async(req,res)=>{
  try{
      const personId = req.params.id;
      const deletePerson = await person.findByIdAndDelete(personId);
      console.log('data delete');
      res.status(200).json(deletePerson)
  }catch(err){
      console.log(err);
      res.status(500).json({error: "Internal server error"})
  }
})


module.exports = routes;