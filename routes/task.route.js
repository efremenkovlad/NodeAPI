const express = require('express');
const router = express.Router();
const task_controller = require('../controllers/task.controller');

router.get('/', task_controller.get_all);
router.post('/', task_controller.task_add);
router.put('/all', task_controller.task_update_all);
router.put('/:id', task_controller.task_update);
router.delete('/delete', task_controller.task_delete);
router.get('/:id', task_controller.task_get);


module.exports = router;
