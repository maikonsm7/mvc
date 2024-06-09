const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

const conn = require('./db/conn')
// importando os models
const Task = require('./models/Task')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static('public'))

//configuração handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


app.get('/', (req, res)=>{
    res.redirect('/home')
})

app.get('/home', (req, res)=>{
    res.render('home')
})

app.get('/sobre', (req, res)=>{
    res.render('sobre')
})


conn
.sync({force: true})
.then(()=>{
    app.listen(port, ()=>{
        console.log(`Servidor online! http://localhost:${port}`)
    })
})
.catch(err => console.error('Erro ao sincronizar: ', err))