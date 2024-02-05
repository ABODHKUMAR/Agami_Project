const mongoose = require('mongoose');
const timesheetSchema = new mongoose.Schema({
    employee:{
        type:mongoose.Schema.Types.ObjectId , 
        ref :'Employee'
    },
    date :{
        type:Date,
        default: Date.now
    },
    hoursWorked : Number,
    ratingBymanager:Number // Rating should be 1 to 5 only
})

const Timesheet = mongoose.model('Timesheet',timesheetSchema);

module.exports = Timesheet ;