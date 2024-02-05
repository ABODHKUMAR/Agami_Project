const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000  



app.listen(PORT ,()=>{
    console.log(`Server is runing on port ${PORT}`);
})