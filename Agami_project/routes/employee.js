const express = require('express');
const router = express.Router();
const Employee = require('../models/employeeModel');
const Timesheet = require('../models/timesheetModel');


// Define routes from CRUD operation for employees

router.get('/:employeeId/timesheets',async(req,res)=>{
    try{

        const timesheets = await Timesheet.find({employee:req.params.employeeId});
        res.json(timesheets);
    } catch(err){
        res.status(500).json({message:err.message});
    }
})





module.exports = router ;