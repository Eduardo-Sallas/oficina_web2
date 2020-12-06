'use strict';

const mongoose = require('mongoose'),
    Funcionario = mongoose.model('Funcionarios');

// GET - Listar todos os funcionários cadastrados
exports.listar_todos_funcionarios = function(req, res){
    Funcionario.find({}, function(err, funcionarios){
        if(err){
            res.send(err);
        }
        res.json(funcionarios);
    });
}

// POST - Cadastrar um novo Funcionário
exports.criar_funcionario = function(req,res){
    var novo_funcionario = new Funcionario(req.body);
    novo_funcionario.save(function(err, funcionario) {
            if(err){
            res.send(err);
        } else {
        console.log('Funcionario Cadastrado com Sucesso')
        res.json(funcionario);
    }
    });
}

// GET by ID - Retorna um funcionário por um id específico

exports.listar_funcionario_por_id = function(req, res){
    Funcionario.findById(req.params.funcionarioId, function(err, funcionario) {
        if(err){
            res.send(err);
        }
        res.json(funcionario);
    });
}

// PUT - Atualizar os dados de um Funcionário existente
exports.atualizar_funcionario = function(req, res){
    Funcionario.findOneAndUpdate({_id: req.params.funcionarioId}, req.body, {new: true}, function(err, funcionario) {
        if(err){
            res.send(err);
        }
        res.json(funcionario);
    });
}

// DELETE - Remover um funcionário existente
exports.remover_funcionario = function(req, res){
    Funcionario.remove({_id: req.params.funcionarioId},function(err, funcionario) {
        if(err){
            res.send(err);
        }
        res.json( {message: 'Funcionário removido com sucesso'} );
    });
}