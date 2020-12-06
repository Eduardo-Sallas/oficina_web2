'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrcamentoSchema = new Schema ({
    valorDoOrcamento: {
        type: Number,
        required: 'O valor do Orçamento é obrigatório'
    },

    solicitacao: {
        type: String,
        required: 'O tipo de solicitacao do Orçamento é obrigatório'
    },

    servicoDesejado: {
        type: String,
        required: 'O serviço desejado pelo cliente é obrigatório'
    },

    nomeCliente: {
        type: String,
        required: 'O nome do cliente é obrigatório'
    
    },

    tipoVeiculo: {
        type: String,
        required: 'O tipo de veículo é obrigatório'
    }


});

module.exports = mongoose.model('Orcamentos', OrcamentoSchema);