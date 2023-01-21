const { Router } = require('express');
const { getUserById, updateUser, createUser} = require('../controllers/users.controllers');

const router = Router();

router.get("/users/:id", getUserById)
router.post("/users", createUser)
router.put('/users/:id', updateUser)
    
    

module.exports = router;