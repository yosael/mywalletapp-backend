const express = require('express');
const router = express.Router();
const { getAllByUser, getIncomeVsExpenseReport } = require('../controllers/transaction');

router.get('/transactions/:userId', getAllByUser);
router.get('/transactionsCompareReport/:userId', getIncomeVsExpenseReport);

module.exports = router;