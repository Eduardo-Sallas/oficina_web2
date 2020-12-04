const mongoose = require('mongoose'),

    Estoque = mongoose.model('Estoque');

// GET - Listar todos os produtos cadastrados no estoque
exports.listar_todos_produtos_do_estoque = function(req, res){
    Estoque.find({}, function(err, estoque){
        if(err){
            res.send(err);
        }
        res.json(estoque);
    });
}

// POST - Cadastrar um novo Produto no estoque
exports.criar_produto_no_estoque = function(req,res){
    var novo_produto_no_estoque = new Estoque(req.body);
    novo_produto_no_estoque.save(function(err, estoque) {
            if(err){
            res.send(err);
        }
        res.json(estoque);
    });
}

// GET by ID - Retorna um produto por um id específico no Estoque

exports.listar_produto_por_id_no_estoque = function(req, res){
    Estoque.findById(req.params.produtoEstoqueId, function(err, estoque) {
        if(err){
            res.send(err);
        }
        res.json(estoque);
    });
}

// PUT - Atualizar os dados de um Produto existente no Estoque
exports.atualizar_produto_no_Estoque = function(req, res){
    Estoque.findOneAndUpdate({_id: req.params.produtoEstoqueId}, req.body, {new: true}, function(err, estoque) {
        if(err){
            res.send(err);
        }
        res.json(estoque);
    });
}

// DELETE - Remover um Produto existente do Estoque
exports.remover_produto_do_estoque = function(req, res){
    Estoque.remove({_id: req.params.produtoId},function(err, estoque) {
        if(err){
            res.send(err);
        }
        res.json( {message: 'Produto removido do Estoque com sucesso'} );
    });
}