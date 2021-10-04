const express = require('express');
const app = express();

//middleware
app.use((req,res,next)=>{
    res.status(200).json({message:'ok'});
    //res.send("<h1>Hello express2</h1>");
});


app.listen(3001,()=> console.log("Server is running on port 3001"));
