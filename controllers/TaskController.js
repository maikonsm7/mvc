// importar o model
const { raw } = require('mysql2')
const Task = require('../models/Task')

class TaskController {
    static createTask(req, res){
        res.render('tasks/create')
    }
    static async createTaskSave(req, res){
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }
        await Task.create(task)
        res.redirect('/tasks')
    }
    static async removeTask(req, res){
        const id = req.params.id
        await Task.destroy({where: {id}})
        res.redirect('/tasks')
    }
    static async editTask(req, res){
        const id = req.params.id
        const task = await Task.findOne({raw: true, where: {id}})
        res.render('tasks/edit', {task})
    }
    static async editTaskSave(req, res){
        const id = req.body.id
        const task = {
            title: req.body.title,
            description: req.body.description
        }
        await Task.update(task, {where: {id}})
        res.redirect('/tasks')
    }
    static async updateStatusTask(req, res){
        const id = req.body.id
        const task = {done: req.body.done === '0' ? true : false}
        await Task.update(task, {where: {id}})
        res.redirect('/tasks')
    }
    static async showTasks(req, res){
        const tasks = await Task.findAll({raw: true})
        res.render('tasks/all', {tasks})
    }
}

module.exports = TaskController