const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

const conn = require('./db/conn')

// importando os models
const Task = require('./models/Task')

// importando as rotas
const tasksRoutes = require('./routes/tasksRoutes')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static('public'))

//configuração handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res)=>{
    res.render('home')
})

app.get('/sobre', (req, res)=>{
    res.render('sobre')
    })
    
app.use('/tasks', tasksRoutes)

conn
.sync()
.then(()=>{
    app.listen(port, ()=>{
        console.log(`Servidor online! http://localhost:${port}`)
    })
})
.catch(err => console.error('Erro ao sincronizar: ', err))