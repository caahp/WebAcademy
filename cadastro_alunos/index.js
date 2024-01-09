const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); 

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Initialize server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.post('/alunos', (req, res) => {
    const aluno = req.body;
    res.send(`Hello, ${aluno.nome}!!!`)
});

app.get('/', (req, res) => {
    res.send("Welcome to our Website!");
});




