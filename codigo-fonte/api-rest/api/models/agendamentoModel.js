'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgendamentoSchema = new Schema ({
    dataAgendamento: {
        type: Date
    },

    nomeDoSolicitante: {
        type: String,
        required: 'Nome do Solicitante é obrigatório'
    },

    created_at: {
        type: Date,
        default: Date.now
    },

    descricaoDoAgendamento: {
        type: String,
        required: 'Descrição do agendamento é obrigatório'
    },

});

module.exports = mongoose.model('Agendamentos', AgendamentoSchema);