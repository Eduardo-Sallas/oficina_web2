const mongoose = require('mongoose'),

    Orcamento = mongoose.model('Orcamentos');

// GET - Listar todos os Orçamentos cadastrados
exports.listar_todos_orcamentos = function(req, res){
    Orcamento.find({}, function(err, orcamentos){
        if(err){
            res.send(err);
        }
        res.json(orcamentos);
    });
}

// POST - Cadastrar um novo Orçamento
exports.criar_orcamento = function(req,res){
    var novo_orcamento= new Orcamento(req.body);
    novo_orcamento.save(function(err, orcamentos) {
            if(err){
            res.send(err);
        }
        res.json(orcamentos);
    });
}

// GET by ID - Retorna um Orçamento por um id específico

exports.listar_orcamento_por_id = function(req, res){
    Orcamento.findById(req.params.produtoId, function(err, orcamentos) {
        if(err){
            res.send(err);
        }
        res.json(orcamentos);
    });
}

// PUT - Atualizar os dados de um Orçamento existente
exports.atualizar_orcamentos = function(req, res){
    Orcamento.findOneAndUpdate({_id: req.params.orcamentoId}, req.body, {new: true}, function(err, orcamentos) {
        if(err){
            res.send(err);
        }
        res.json(orcamentos);
    });
}

// DELETE - Remover um Orçamento existente
exports.remover_orcamento = function(req, res){
    Orcamento.remove({_id: req.params.orcamentoId},function(err, orcamento) {
        if(err){
            res.send(err);
        }
        res.json( {message: 'Orçamento removido com sucesso'} );
    });
}