const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('todolistDB', 'root', '', { // db, usuário, senha
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Banco de dados conectado!')
} catch (error) {
    console.error('Erro ao conectar banco de dados: ', error)
}

module.exports = sequelize