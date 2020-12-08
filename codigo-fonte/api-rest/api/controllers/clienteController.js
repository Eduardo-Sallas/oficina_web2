'use strict';

const mongoose = require('mongoose'),
    Cliente = mongoose.model('Clientes');

// GET - Listar todos os funcionários cadastrados
exports.listar_todos_clientes = function(req, res){
    Cliente.find({}, function(err, cliente){
        if(err){
            res.send(err);
        }
        res.json(cliente);
    });
}

// POST - Cadastrar um novo Funcionário
exports.criar_cliente = function(req,res){
    var novo_cliente = new Cliente(req.body);
    novo_cliente.save(function(err, cliente) {
            if(err){
                console.log(err);
            res.send(err);
        }else {
        res.json(cliente);
        console.log('Cliente cadastrado com sucesso!');
        }
    });
}

// GET by ID - Retorna um funcionário por um id específico

exports.listar_cliente_por_id = function(req, res){
    Cliente.findById(req.params.clienteId, function(err, cliente) {
        if(err){
            res.send(err);
        }
        res.json(cliente);
    });
}

// PUT - Atualizar os dados de um Cliente existente
exports.atualizar_cliente = function(req, res){
    Cliente.findByIdAndUpdate({_id: req.params.clienteId}, req.body, {new: true}, function(err, cliente) {
        if(err){
            res.send(err);
            console.log('Erro ao atualizar cliente', err);
        }
        res.json(cliente);
        console.log('Cliente atualizado com sucesso', cliente);
    });
}

// DELETE - Remover um Cliente existente
exports.remover_cliente = function(req, res){
    Cliente.remove({_id: req.params.clienteId},function(err, cliente) {
        if(err){
            res.send(err);
            console.log('Erro ao remover Cliente', err);
        }
        res.json( {message: 'Cliente removido com sucesso'} );
        console.log('Cliente removido com sucesso');
    });
}