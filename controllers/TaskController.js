// importar o model
const Task = require('../models/Task')

class TaskController {
    static createTask(req, res){
        res.render('tasks/create')
    }
    static showTasks(req, res){
        res.render('tasks/all')
    }
}

module.exports = TaskController