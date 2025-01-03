const express=require('express');  //all express packages are stored in express variable
const app=express(); // that express is called in app
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    console.log("hi");
        //res.status(500).send("error occured");// hi display in cmd whereas error occured msg is print in web page.
        //res.status(200).send({error:"error message"}); // res-response
        //res.json({express:"learning express"})
        res.send("hello world");

});                              
const userRoute = require('./routes/user');
app.use('/user',userRoute);
app.listen(3000); // open 3000 host 
