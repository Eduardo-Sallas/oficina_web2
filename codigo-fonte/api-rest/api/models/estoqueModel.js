'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EstoqueSchema = new Schema ({
    nomeDoProduto: {
        type: String,
        required: 'Nome do produto é obrigatório'
    },

    quantidadeDeProdutos: {
        type: Number,
        required: 'Valor da quantidade de Produtos é obrigatório'
    },


});

module.exports = mongoose.model('Estoque', EstoqueSchema);