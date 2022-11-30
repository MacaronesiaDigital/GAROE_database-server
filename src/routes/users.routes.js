const { Router } = require('express');
const router = Router();


const userCtrl = require('../controllers/users.controller.js')

router.get('/', userCtrl.getUsers);
router.post('/', userCtrl.createUser);
router.get('/:id', userCtrl.getUser);
router.patch('/:id', userCtrl.editUser);
router.delete('/:id', userCtrl.deleteUser);

router.put('/', userCtrl.filtraUser);


module.exports = router;
