const express = require('express');
const router = express.Router();
const { create, getExpensesReport, getExpensesReportLastGroupByDate } = require('../controllers/expense');

router.post('/expense', create);
router.get('/expensesReport/:userId', getExpensesReport);
router.get('/expensesReportlastByDate/:userId', getExpensesReportLastGroupByDate);

module.exports = router;