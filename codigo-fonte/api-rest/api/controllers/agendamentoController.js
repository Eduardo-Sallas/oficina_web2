'use strict';

const mongoose = require('mongoose'),
    Agendamento = mongoose.model('Agendamentos');

// GET - Listar todos os agendamentos cadastrados
exports.listar_todos_agendamentos = function(req, res){
    Agendamento.find({}, function(err, agendamento){
        if(err){
            res.send(err);
            console.log('Erro ao listar os Agendamentos', err);
        }
        res.json(agendamento);
        console.log('Agendamentos listados com sucesso!', err);
    });
}

// POST - Cadastrar um novo Agendamento
exports.criar_agendamento = function(req,res){
    var novo_agendamento = new Agendamento(req.body);
    novo_agendamento.save(function(err, agendamento) {
            if(err){
            res.send(err);
            console.log('Erro ao cadastrar um novo agendamento', err);
        }else {
        res.json(agendamento);
        console.log('Agendamento cadastrado com sucesso!');
        }
    });
}

// GET by ID - Retorna um Agendamento por um id específico

exports.listar_agendamento_por_id = function(req, res){
    Agendamento.findById(req.params.agendamentoId, function(err, agendamento) {
        if(err){
            res.send(err);
            console.log('Erro ao retornar o agendamento');
        }
        console.log('Agendamento listado com sucesso!')
        res.json(agendamento);
    });
}

// PUT - Atualizar os dados de um Agendamento existente
exports.atualizar_agendamento = function(req, res){
    Agendamento.findByIdAndUpdate({_id: req.params.agendamentoId}, req.body, {new: true}, function(err, agendamento) {
        if(err){
            res.send(err);
            console.log('Erro ao atualizar agendamento', err);
        }
        res.json(agendamento);
        console.log('Agendamento atualizado com sucesso', agendamento);
    });
}

// DELETE - Remover um Agendamento existente
exports.remover_agendamento = function(req, res){
    Agendamento.remove({_id: req.params.agendamentoId},function(err, agendamento) {
        if(err){
            res.send(err);
            console.log('Erro ao remover Agendamento', err);
        }
        res.json( {message: 'Agendamento removido com sucesso'} );
        console.log('Agendamento removido com sucesso');
    });
}