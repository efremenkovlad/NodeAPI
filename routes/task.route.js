const express = require('express');
const router = express.Router();
const {checkJWT} = require('../utils/auth')
const task_controller = require('../controllers/task.controller');


router.get('/', checkJWT, task_controller.get_all);
router.post('/', checkJWT,task_controller.task_add);
router.put('/all', checkJWT, task_controller.task_update_all);
router.put('/:id', checkJWT, task_controller.task_update);
router.delete('/delete', checkJWT, task_controller.task_delete);
router.get('/:id', checkJWT, task_controller.task_get);


module.exports = router;
