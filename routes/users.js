const express = require('express');
const userController = require('../controller/users')
const router = express.Router();

router.get('/', userController.getUsers);

router.get('/getbyid/:id', userController.getUsersById);

router.post('/create', userController.createUsers);

router.put('/edit/:id', userController.editUsers);

router.delete('/delete/:id', userController.deleteUsers);

module.exports = router