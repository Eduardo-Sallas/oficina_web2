'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgendamentoSchema = new Schema ({
    dataAgendamento: {
        type: String,
        required: 'Data do Agendamento é obrigatório, exemplo: 22/10/1999'
    },

    nomeDoSolicitante: {
        type: String,
        required: 'Nome do Solicitante é obrigatório'
    },

    descricaoDoAgendamento: {
        type: String,
        required: 'Descrição do Agendamento é obrigatório, exemplo: Trocar o Óleo'
    },


});

module.exports = mongoose.model('Agendamentos', AgendamentoSchema);