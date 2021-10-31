const express = require('express');
const router = express.Router();
const { create } = require('../controllers/income');

router.post('/income', create);

module.exports = router;