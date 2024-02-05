const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employee')
const managerRoutes = require('./routes/manager')
const registerManagerRoutes = require('./routes/registerManager')
const registerEmployeeRoutes = require('./routes/registerEmployee')
const app = express();
const PORT = 3000  
app.use(express.json());
app.use(bodyParser.json());

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect('mongodb://localhost:27017/Agami_project');
        console.log( `Connected TO Mongodb ${conn.connection.host}`
        );
    }
    catch(error){
        console.log(`Error in Mongodb ${error}`)
    }
}

//Connect to MongoDb
connectDB();

//Routes
app.use('/employee',employeeRoutes);
app.use('/manager',managerRoutes);
app.use('/registermanager',registerManagerRoutes);
app.use('/registeremployee',registerEmployeeRoutes );

//server is works
app.listen(PORT ,()=>{
    console.log(`Server is runing on port ${PORT}`);
})