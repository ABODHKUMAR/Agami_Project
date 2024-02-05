const express = require('express');
const router = express.Router();

const axios = require('axios');
const Employee = require('../models/employeeModel');

router.post('/registerEmployee', async(req,res)=>{

    console.log("1");

    console.log(req.body);

    console.log("2");

    const employeeData = {
        name:req.body.name,
        email:req.body.email,
        managerEmail:req.body.managerEmail,
        rating:"0"
       
    }

    

   
    try {       
        
        const newEmployee= new Employee(employeeData);
        console.log(newEmployee)
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } 
     catch(error){
        res.status(401).json({message:error.message});
     }
    
})

module.exports = router ;