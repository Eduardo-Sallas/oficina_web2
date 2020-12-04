'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProdutoSchema = new Schema ({
    nomeDoProduto: {
        type: String,
        required: 'Nome do produto é obrigatório'
    },

    valorDoProduto: {
        type: Number,
        required: 'Valor do Produto é obrigatório'
    },


});

module.exports = mongoose.model('Produtos', ProdutoSchema);