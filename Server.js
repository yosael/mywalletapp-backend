const express = require('express');
const app = express();
const cors = require('cors');

const { serverConfig } = require('./src/config/config');


const categoriesRoutes = require('./src/routes/categories');

//middleware
app.use(cors())

app.use(express.json());

app.use(categoriesRoutes);

app.use('/',(req,res,next) => {
    res.status(400).json({endpoint:'Invalid Endpoint'});
})

app.listen(serverConfig.port, ()=> console.log("Server is running on port 3001"));
