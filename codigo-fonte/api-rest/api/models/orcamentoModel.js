'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrcamentoSchema = new Schema ({
    valorDoOrcamento: {
        type: Number,
        required: 'O valor do Orçamento é obrigatório'
    },

    produtos: {
        type: String,
        required: 'Os produdos do Orçamento é obrigatório'
    },


});

module.exports = mongoose.model('Orcamentos', OrcamentoSchema);