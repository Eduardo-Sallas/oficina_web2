const mongoose = require('mongoose'),

    Fornecedor = mongoose.model('Fornecedores');

// GET - Listar todos os fornecedores cadastrados
exports.listar_todos_fornecedores = function(req, res){
    Fornecedor.find({}, function(err, fornecedores){
        if(err){
            res.send(err);
        }
        res.json(fornecedores);
    });
}

// POST - Cadastrar um novo Fornecedor
exports.criar_fornecedor = function(req,res){
    var novo_fornecedor= new Fornecedor(req.body);
    novo_fornecedor.save(function(err, fornecedor) {
            if(err){
            res.send(err);
            console.log('Erro ao cadastrar fornecedor', err);
        } else {
        res.json(fornecedor);
        console.log('Fornecedor Cadastrado com Sucesso!');
    }
    });
}

// GET by ID - Retorna um Fornecedor por um id específico

exports.listar_fornecedor_por_id = function(req, res){
    Fornecedor.findById(req.params.fornecedorId, function(err, fornecedor) {
        if(err){
            res.send(err);
        }
        res.json(fornecedor);
    });
}

// PUT - Atualizar os dados de um Fornecedor existente
exports.atualizar_fornecedor = function(req, res){
    Fornecedor.findOneAndUpdate({_id: req.params.fornecedorId}, req.body, {new: true}, function(err, fornecedor) {
        if(err){
            res.send(err);
            console.log('Erro ao Atualizar Fornecedor', err);
        }
        res.json(fornecedor);
        console.log('Fornecedor Atualizado com Sucesso!')
    });
}

// DELETE - Remover um Fornecedor existente
exports.remover_fornecedor = function(req, res){
    Fornecedor.remove({_id: req.params.fornecedorId},function(err, fornecedor) {
        if(err){
            res.send(err);
        }
        res.json( {message: 'Fornecedor removido com sucesso'} );
        console.log('Fornecedor Removido com Sucesso!');

    });
}