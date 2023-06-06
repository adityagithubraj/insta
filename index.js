const express=require('express');
const connection = require("./config/db");
const users=require("./routes/user.routes");
const posts=require("./routes/post.routes")
const app=express();

app.use(express.json())

require('dotenv').config()



app.get('/',(req,res)=>
res.send("<h1>Wellcom to Social Media App API<h1/>"))



app.use('/api',users)
app.use('/api',posts)



app.listen(process.env.PORT,()=>{
    try{
        connection
            console.log(`connected to DB`)
    }
    catch(err){
     console.log(err.message)
    }
    console.log(`runig on port ${process.env.PORT}`)
})

