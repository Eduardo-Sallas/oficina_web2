const mongoose = require('mongoose'),

    Servico = mongoose.model('Servicos');

// GET - Listar todos os Servicos cadastrados 
exports.listar_todos_servicos = function(req, res){
    Servico.find({}, function(err, servico){
        if(err){
            res.send(err);
        }
        res.json(servico);
    });
}

// POST - Cadastrar um novo Servico
exports.criar_servico = function(req,res){
    var novo_servico = new Servico(req.body);
    novo_servico.save(function(err, servico) {
            if(err){
            res.send(err);
        }
        res.json(servico);
    });
}

// GET by ID - Retorna um Servico por um id específico

exports.listar_servico_pelo_id = function(req, res){
    Servico.findById(req.params.servicoId, function(err, servico) {
        if(err){
            res.send(err);
        }
        res.json(servico);
    });
}

// PUT - Atualizar os dados de um Servico
exports.atualizar_servico = function(req, res){
    Servico.findOneAndUpdate({_id: req.params.servicoId}, req.body, {new: true}, function(err, servico) {
        if(err){
            res.send(err);
        }
        res.json(servico);
    });
}

// DELETE - Remover um Servico existente 
exports.remover_servico = function(req, res){
    Servico.remove({_id: req.params.servicoId},function(err, servico) {
        if(err){
            res.send(err);
        }
        res.json( {message: 'Servico removido com sucesso'} );
    });
}