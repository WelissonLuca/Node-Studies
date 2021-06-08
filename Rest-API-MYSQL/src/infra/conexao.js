const mysql = require('mysql');


const conexao = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '123',
  database: 'agenda_pet'
})

module.exports = conexao;