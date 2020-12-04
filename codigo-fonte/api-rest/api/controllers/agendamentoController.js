const mongoose = require('mongoose'),

    Agendamento = mongoose.model('Agendamentos');

// GET - Listar todos os Agendamentos cadastrados
exports.listar_todos_agendamentos = function(req, res){
    Agendamento.find({}, function(err, agendamentos){
        if(err){
            res.send(err);
        }
        res.json(agendamentos);
    });
}

// POST - Cadastrar um novo Agendamento
exports.criar_agendamento = function(req,res){
    var novo_agendamento = new Agendamento(req.body);
    novo_agendamento.save(function(err, agendamento) {
            if(err){
            res.send(err);
        }
        res.json(agendamento);
    });
}

// GET by ID - Retorna um Agendamento por um id específico

exports.listar_agendamento_por_id = function(req, res){
    Agendamento.findById(req.params.agendamentoId, function(err, agendamentos) {
        if(err){
            res.send(err);
        }
        res.json(agendamentos);
    });
}

// PUT - Atualizar os dados de um Agendamento existente
exports.atualizar_agendamento = function(req, res){
    Agendamento.findOneAndUpdate({_id: req.params.agendamentoId}, req.body, {new: true}, function(err, agendamentos) {
        if(err){
            res.send(err);
        }
        res.json(agendamentos);
    });
}

// DELETE - Remover um Agendamento existente
exports.remover_agendamento = function(req, res){
    Agendamento.remove({_id: req.params.agendamentoId},function(err, agendamentos) {
        if(err){
            res.send(err);
        }
        res.json( {message: 'Agendamento removido com sucesso'} );
    });
}