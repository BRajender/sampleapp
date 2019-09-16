//create a mini express application
var exp=require('express')
var adminrouter=exp.Router();

var mongodb=require('mongodb').MongoClient
var dbo;
var admincollection;


//connecting to db
mongodb.connect(process.env.url,{useNewUrlParser:true},(err,client)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        dbo=client.db('rajender')
        admincollection=dbo.collection('user')
        console.log('adminrestapi connecting to db successfully')
    }
})


//get req handler
adminrouter.get('/userinformation',(req,res,next)=>{
    console.log('inget')
    admincollection.find().toArray((err,userArray)=>{
        
        
        console.log(userArray)
        if(err)
        {
            return next(err);
        }
        //check for size array
        if(userArray.length==0)
        {
            res.json({msg:'no user registered'})
        }
        else{
            res.json({msg:userArray})
        }
    })
})



//exporting module
module.exports=adminrouter

//error handling middle wear
 adminrouter.use((err,req,res,next)=>{
   res.json({msg:"error at some where."})
})
