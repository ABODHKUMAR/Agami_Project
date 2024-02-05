const express = require('express');
const router = express.Router();
import {Data} from "./../pubic/js/script"
const axios = require('axios');
const Timesheet = require('../models/timesheetModel');

router.post('/registerTimesheet', async(req,res)=>{

    

    const timesheetData = {
        timesheetId:Data().timesheetId,
        date:Data().date,
        hoursWorked:Data.hoursWorked,
        email:Data().email 
        
    }

    console.log(timesheetData);
    

    try {       
        
        const newtimesheetData= new Timesheet(timesheetData);
        console.log(newtimesheetData)
        const savedtimesheetData= await newtimesheetData.save();
        res.status(201).json(savedtimesheetData);
    } 
     catch(error){
        res.status(400).json({message:error.message});
     }
    
})

module.exports = router ;