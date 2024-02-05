const mongoose = require('mongoose');
const employeeSchema= new mongoose.Schema({
    name:String,
    email:String,
    // reportingManager :{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'Manager'},
    // timeSheets : [
    //     {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'Timesheet'}
    // ]
    managerEmail:String,
    rating:{
        type:String,
        default:0,
    }
});

const Employee= mongoose.model('Employee',employeeSchema);
module.exports = Employee;