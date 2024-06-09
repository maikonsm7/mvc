const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

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

app.listen(port, ()=>{
    console.log(`Servidor online! http://localhost:${port}`)
})