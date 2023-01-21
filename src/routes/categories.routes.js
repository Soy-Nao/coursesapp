const { Router } = require('express');
const {
  createCategory,
  deleteCategory
} = require('../controllers/category.controllers')

const router = Router();

router.post('/category', createCategory);

router.delete('/category/:id', deleteCategory);

module.exports = router;