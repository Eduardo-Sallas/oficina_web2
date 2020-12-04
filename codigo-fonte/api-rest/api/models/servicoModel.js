'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServicoSchema = new Schema ({
    nomeDoProprietario: {
        type: String,
        required: 'Nome do Proprietário do Veículo é obrigatório'
    },
    nomeDoVeiculo: {
        type: String,
        required: 'Nome do Veículo é obrigatório'
    },

    anoDoVeiculo: {
        type: Number,
        required: 'Ano do Veículo é obrigatório'
    },

    descricaoDoServico: {
        type: String,
        required: 'Descrição do Serviço Efetuado no veículo é obrigatório'
    },

    statusDoServico: {
        type: String,
        required: 'Status do Serviço é obrigatório, exemplo: A fazer, em andamento, finalizado'
    }


});

module.exports = mongoose.model('Servicos', ServicoSchema);