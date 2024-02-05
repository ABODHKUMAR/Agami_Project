const express = require('express');
const router = express.Router();

const axios = require('axios');
const Manager = require('../models/managerModel');

router.post('/registerManager', async(req,res)=>{

    

    const managerData = {
        name:req.body.name,
        email:req.body.email,
        
    }

    console.log(managerData);
    

    try {       
        
        const newManager= new Manager(managerData);
        console.log(newManager)
        const savedManager = await newManager.save();
        res.status(201).json(savedManager);
    } 
     catch(error){
        res.status(400).json({message:error.message});
     }
    
})

module.exports = router ;