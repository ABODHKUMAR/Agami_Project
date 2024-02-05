const mongoose = require('mongoose');
const timesheetSchema = new mongoose.Schema({
    timesheetId:{
        type:String,
        unique:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    hoursWorked:{
        type:Number,
        required:true,
    },
    email:{
        type:email,
        required:true
    }
})

const Timesheet = mongoose.model('Timesheet',timesheetSchema);

module.exports = Timesheet ;