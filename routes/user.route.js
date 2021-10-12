const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user.controller');


router.post('/login', user_controller.user_signin);
router.post('/signup', user_controller.user_signup);



router.get('/all', user_controller.users_get)
router.delete('/:id', user_controller.user_delete);

module.exports = router;
