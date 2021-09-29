const express = require('express')
const faker = require('faker')
const mysql = require('mysql')

const app = express()
const port = process.env.APP_PORT || 3000
const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
})

app.get('/', (req, res) => {
    const name = faker.name.findName()

    connection.query(`INSERT INTO people (nome) VALUES ('${name}')`)
    connection.query(`SELECT nome FROM people`, (error, results, fields) => {
        if (error) throw error;
        res.send(`
          <h1>Full Cycle Rocks!</h1>
          <ol>
            ${results !== undefined && !!results.length ? results.map(el => `<li>${el.nome}</li>`).join('') : ''}
          </ol>
        `)
    })
})

app.listen(port, () => {
    console.log('Rodando na porta: ', port);
})