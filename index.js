const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Bem vindo!')
})

app.listen(port, ()=>{
    console.log(`Servidor online! http://localhost:${port}`)
})