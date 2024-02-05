const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000  


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


//server is works
app.listen(PORT ,()=>{
    console.log(`Server is runing on port ${PORT}`);
})