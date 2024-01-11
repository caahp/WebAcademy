const express = require('express');
const router = express.Router();
const db = require('./db');

// Alunos - Read Endpoint
router.get('/alunos', (req, res) => {
    const query = "SELECT * FROM alunos"

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).json("Erro ao obter aluno");
        }
        else{
            res.json(result);
        }
    });
});

// Alunos - Create Endpoint
router.post('/alunos', (req, res) => {
    const { nome,idade } = req.body
    const query = `INSERT INTO alunos (nome,idade) VALUES ('${nome}', ${idade})`;

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).json("Erro ao criar aluno");
        }
        else{
            res.json(result);
        }
    })
});

// Alunos - Update Endpoint
router.put('/alunos/:id', (req,res) => {
    const id = req.params.id
    const {nome, idade} = req.body
    const query = `UPDATE alunos SET nome = '${nome}', idade = ${idade} WHERE id_aluno = ${id}`;

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).json("Erro ao atualizar aluno");
        }else{
            res.json(result);
        }
    });
});

// Alunos - Delete Endpoint
router.delete('/alunos/:id', (req,res) => {
    const id = req.params.id
    const query = `DELETE FROM alunos WHERE id_aluno = ${id}`;

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).json("Erro ao deletar aluno");
        }else{
            res.json(result);
        }
    });
});

// Aulas - Read Endpoint
router.get('/aulas', (req, res) => {
    const query = "SELECT * FROM aulas"

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).json("Erro ao obter aula");
        }
        else{
            res.json(result);
        }
    });
});

// Aulas - Create Endpoint
router.post('/aulas', (req, res) => {
    const { nome_aula, descricao } = req.body;
    const query = `INSERT INTO aulas (nome_aula, descricao) VALUES ('${nome_aula}', '${descricao}')`;

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).json({error: err.message});
        }
        else{
            res.json(result);
        }
    });
});

// Aulas - Update Endpoint
router.put('/aulas/:id', (req, res) => {
    const id = req.params.id;
    const {nome_aula, descricao} = req.body;
    const query = `UPDATE aulas SET nome_aula = '${nome_aula}', descricao = '${descricao}' WHERE id_aula = ${id}`;

    db.query(query, (err,result) => {
        if (err) {
            res.status(500).json("Erro ao atualizar aula");
        }else{
            res.json(result);
        }
    })
});

// Aulas - Delete Endpoint
router.delete('/aulas/:id', (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM aulas WHERE id_aula = ${id}`;

    db.query(query, (err,result) => {
        if (err){
            res.status(500).json("Erro ao deletar aula");
        }else{
            res.json(result);
        }
    });
});

module.exports = router;