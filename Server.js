const express = require('express');
const app = express();
const categoriesRoutes = require('./src/routes/categories');

//middleware
app.use(express.json());

app.use(categoriesRoutes);
app.use('/',(req,res,next) => {
    res.status(400).json({endpoint:'Invalid Endpoint'});
})

app.listen(3001,()=> console.log("Server is running on port 3001"));
