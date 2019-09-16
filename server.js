//import express object
var exp=require('express');

//create express object
var app=exp();

//import user route
var userrouter=require('./router/userrestapi');

//import admin route
var adminrouter=require('./router/adminrestapi')

//use the user route
app.use('/child',userrouter);
app.use('/admin',adminrouter);
app.use('/user',userrouter);

//import path
var path=require('path');

//connecting with compiled angular app
app.use(exp.static(path.join(__dirname,'dist/project')));

app.get('*',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'dist/project/index.html'))
})

//assign a portnumber
var portno=process.env.PORT||2000;
app.listen(portno,()=>console.log(`server running on ${portno}`))