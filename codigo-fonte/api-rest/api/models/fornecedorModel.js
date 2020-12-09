'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FornecedorSchema = new Schema ({
    nomeDoFornecedor: {
        type: String,
        required: 'Nome do Fornecedor é obrigatório'
    },

    fornecimento: {
        type: String,
        required: 'Produto Fornecido pelo Fornecedor é obrigatório'
    }


});

module.exports = mongoose.model('Fornecedores', FornecedorSchema);