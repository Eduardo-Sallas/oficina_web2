'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FuncionarioSchema = new Schema ({
    nome: {
        type: String,
        required: 'Nome do Funcionário é obrigatório'
    },

    created_at: {
        type: Date,
        default: Date.now
    },

    setor: {
        type: String,
        required: 'O setor do Funcionário é obrigatório'
    },

    dataNascimento: {
        type: String,
        required: 'A Data de Nascimento do Funcionário é obrigatório'
    },

    cpf: {
        type: String,
        required: 'O CPF do Funcionário é obrigatório'
    }

});

module.exports = mongoose.model('Funcionarios', FuncionarioSchema);