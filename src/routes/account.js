const express = require('express');
const router = express.Router();
const { create,getAllByUser } = require('../controllers/account');

router.get('/accounts/:userId', getAllByUser);
router.post('/account', create);

module.exports = router;