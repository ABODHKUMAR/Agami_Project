const mongoose = require('mongoose');
const managerSchema= new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
    }
});

const Manager= mongoose.model('Manager',managerSchema);
module.exports = Manager;