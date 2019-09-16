//creating a express mini application
var exp = require('express')
var userrouter=exp.Router();
var mongodb=require('mongodb').MongoClient;
var bcrypt=require('bcrypt')
var dbo;
var usercollection;
var jwt=require('jsonwebtoken');
var secret="shhh"
var un;

require('dotenv').config();

//connecting to mongodb
mongodb.connect(process.env.url,{useNewUrlParser:true},(err,client)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        dbo=client.db('rajender')
        usercollection=dbo.collection('user')
        console.log("connecting to db successfully");
        
        
    }
})

//authorization middle ware
var checkauth=(req,res,next)=>{
    //check for token
    var token=req.headers['authorization'];
    //if token not found,do this
    if(token===undefined)
    {
        return next(new Error('log in to access'));
    }
    //if token found,do this
    if(token)
    {
        var onlytoken=token.slice(7,token.length)
        console.log('only token is: '+onlytoken);
        //we need to verify validity of this token
        jwt.verify(onlytoken,secret,(err,success)=>{
            if(err)
            {
                return next(new Error('timeout ,plz login'))
            }
            next();
        })
    }
    else{
        next();
    }

}





//body parser for post and update operation
userrouter.use(exp.json());

//signup post request handler
userrouter.post('/signup', (req,res)=>{
    console.log('in user rest api');
    

    //check for the user existance in the database
    usercollection.find({username:req.body.username}).toArray((err,usersArray)=>{
        if(err)
        {
            return next(new Error('problem in finding userArray'))
        }
        if(usersArray.length===0)
        {
            //if user is not existed,hash the password and save it to db
            bcrypt.hash(req.body.password,8,(err,hashedpassword)=>{
                if(err)
                {
                    return next(new Error('problem in hashing'))
                }
                //replace plain text password with hashed password
                req.body.password=hashedpassword;
                //console.log(req.body);
                //inserted userobject in db
                usercollection.insertOne(req.body,(err,success)=>{
                    if(err)
                    {
                        return next(new Error('problem in data inserting in db'))
                    }
                    res.json({msg:'user registerd successfully'})

                
            })
             })
            }
            else
                {
                    res.json({msg:'user already existed'})
                }
    

})
})

//login handler
userrouter.post('/login',(req,res,next)=>{
    

    //admin login
    if(req.body.username == 'raj@raj.com')
    {
        console.log("in admin email check")
        if(req.body.password == 'raj')
        {
            res.json({msg:'Admin logged successfully'})
        }
        else
        {
            res.json({msg:'invalid password'})
        }
    }
    else
    {

    //check for username existance in db
    usercollection.find({username:req.body.username}).toArray((err,userArray)=>{
        if(err)
        {
            return next(new Error('error in find userarray in login handler'))
        }
       
        //check for array size
        if(userArray.length==0)
        {
            res.json({msg:'invalid user name'})
        }
        
        else {
            //check with password
            bcrypt.compare(req.body.password,userArray[0].password,(err,result)=>{
                if(err)
                {
                    return next(new Error('problem in comparision of login password'))
                }
                
                    console.log(result);
                    if(result==true)
                    {
                    
                        var signedToken=jwt.sign({username:userArray[0].username},secret,{expiresIn:60})
                        console.log('encoded token is'+signedToken)
                        res.json({token:signedToken})
                        un=req.body.username

                        //res.json({msg:'you have logged in successfully'})
                    }
                    else
                    {
                        res.json({msg:'invalid password'})
                    }
                
            })
        }
    })
} 
})


//read logined user data
userrouter.get('/profile',checkauth,(req,res,next)=>{
    usercollection.find({username:un}).toArray((err,userArray)=>{
        if(err)
        {
            return next(new Error('s'))
        }
        if(userArray.length==0)
        {
            res.json({msg:'user not existed'})
        }
        else{
            res.json({msg:userArray})
            console.log('users :'+userArray)
        }

    })
})


//update user profile handler
//update the user info
userrouter.put('/profile',(req,res,next)=>{
    console.log(req.body)
    console.log('in user update');
    usercollection.updateOne({username: un}, {$set : {username : req.body.username, dob: req.body.dob, adress : req.body.adress,  mobile :req.body.mobile}},(err,success)=>{
        if(err)
        {
          res.json(new Error('invalid user data'))
        }
        else
        {
            res.json({msg:'successfully updated'})
        }
    })
})



//export this module
module.exports=userrouter;

//error handling middle wear
userrouter.use((err,req,res,next)=>{
    res.json({msg:err.msg})
})




// router.post("/update/:id", (req,res)=>{

//     {
//         id:"acb123",
//     firstname:"",
//     lastname:"",
//     email:"bcd@",
//     password:"",
//     number:""
//     },

//     usercollection.find({email:req.body.email}}.toArry

// })

// [
//     {
//     id:"acb123",
// firstname:"",
// lastname:"",
// email:"abc@",
// password:"",
// number:""
// },
// {
//     id:"acb124",
// firstname:"",
// lastname:"",
// email:"bcd@",
// password:"",
// number:""
// },
// {
//     id:"acb125",
// firstname:"",
// lastname:"",
// email:"def@",
// password:"",
// number:""
// },
// ]