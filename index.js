require('dotenv').config();
const express = require("express");
const app = express();
const userRouter = require("./routes/studentRouter");
const mongoose = require("mongoose");
const cors = require('cors');

const whiteList = {origin: '0.0.0.0/0', origin: 'http://127.0.0.1/0'};

//connect to mongoose
 mongoose.connect(process.env.MONGO_CONNECTION_URL, 
    { 
        useNewUrlParser: true ,
         useUnifiedTopology: true
    },(error)=>{
        if(error){
                 console.log(error.message)
        }else{
            console.log("Mongo Connected")
        }
    });

app.use("/api", express.urlencoded({extended: true}), userRouter);

app.use(cors(whiteList));

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server running on Port ${process.env.PORT}`)
})