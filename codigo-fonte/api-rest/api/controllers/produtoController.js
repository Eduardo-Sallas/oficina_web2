const mongoose = require('mongoose'),

    Produto = mongoose.model('Produtos');

// GET - Listar todos os produtos cadastrados
exports.listar_todos_produtos = function(req, res){
    Produto.find({}, function(err, produtos){
        if(err){
            res.send(err);
        }
        res.json(produtos);
    });
}

// POST - Cadastrar um novo Produto
exports.criar_produto = function(req,res){
    var novo_produto= new Produto(req.body);
    novo_produto.save(function(err, produto) {
            if(err){
            res.send(err);
        } else {
        res.json(produto);
        console.log('Produto Cadastrado com Sucesso!');
    }
    });
}

// GET by ID - Retorna um produto por um id específico

exports.listar_produto_por_id = function(req, res){
    Produto.findById(req.params.produtoId, function(err, produto) {
        if(err){
            res.send(err);
        }
        res.json(produto);
    });
}

// PUT - Atualizar os dados de um Produto existente
exports.atualizar_produto = function(req, res){
    Produto.findOneAndUpdate({_id: req.params.produtoId}, req.body, {new: true}, function(err, produto) {
        if(err){
            res.send(err);
        }
        res.json(produto);
    });
}

// DELETE - Remover um Produto existente
exports.remover_produto = function(req, res){
    Produto.remove({_id: req.params.produtoId},function(err, produto) {
        if(err){
            res.send(err);
        }
        res.json( {message: 'Funcionário removido com sucesso'} );
    });
}