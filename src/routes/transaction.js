const express = require('express');
const router = express.Router();
const { getAllByUser, getIncomeVsExpenseReport, getLast5ByUser } = require('../controllers/transaction');

router.get('/transactions/:userId', getAllByUser);
router.get('/transactionsCompareReport/:userId', getIncomeVsExpenseReport);
router.get('/transactions/last5/:userId', getLast5ByUser);

module.exports = router;