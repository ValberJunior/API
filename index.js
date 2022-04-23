require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const userRouter = require("./routes/studentRouter");
const mongoose = require("mongoose");
const cors = require('cors');

const whiteList = {origin: "*" };

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

    
app.use(cors(whiteList));

app.use("/static",express.static(path.join(__dirname,"client")));

app.use("/api", express.urlencoded({extended: true}), userRouter);


app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server running on Port ${process.env.PORT}`)
})