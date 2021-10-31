const express = require('express');
const app = express();
const cors = require('cors');

const { serverConfig } = require('./src/config/config');


const categoriesRoutes = require('./src/routes/categories');
const userRoutes = require('./src/routes/user');
const accountTypeRoutes = require('./src/routes/accountType');
const account = require('./src/routes/account');
const currency = require('./src/routes/currency');
const expense = require('./src/routes/expense');
const income = require('./src/routes/income');
const transfer = require('./src/routes/transfer');

//middleware
app.use(cors())

app.use(express.json());

app.use(categoriesRoutes);
app.use(userRoutes);
app.use(accountTypeRoutes);
app.use(account);
app.use(currency);
app.use(expense);
app.use(income);
app.use(transfer);

app.use('/',(req,res,next) => {
    res.status(400).json({endpoint:'Invalid Endpoint'});
})

app.listen(serverConfig.port, ()=> console.log(`Server is running on port ${serverConfig.port}`));
