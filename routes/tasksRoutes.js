const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.get('/remove/:id', TaskController.removeTask)
router.get('/edit/:id', TaskController.editTask)
router.post('/edit', TaskController.editTaskSave)
router.post('/updatestatus', TaskController.updateStatusTask)
router.get('/', TaskController.showTasks)

module.exports = router