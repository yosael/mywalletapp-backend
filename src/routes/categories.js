const express = require('express');
const { createCategory, getCategories, getCategory } = require('../controllers/categories');

const router = express.Router();

router.post('/category', createCategory);

router.get('/category/:id', getCategory);

router.get('/categories', getCategories);

module.exports = router;