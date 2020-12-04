'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema ({
    nome: {
        type: String,
        required: 'Nome do Cliente é obrigatório'
    },

    sobrenome: {
        type: String,
        required: 'Sobrenome do Cliente é obrigatório'
    },

    created_at: {
        type: Date,
        default: Date.now
    },

    email: {
        type: String,
        required: 'O e-mail do Funcionário é obrigatório'
    },

    telefone: {
        type: String,
        required: 'O telefone do Funcionário é obrigatório'
    },


    rua: {
        type: String,
        required: 'A rua do endereço do Cliente é obrigatório'
    },

    bairro: {
        type: String,
        required: 'O bairro do endereço do Cliente é obrigatório'
    },

    estado: {
        type: String,
        required: 'O Estado do endereço do Cliente é obrigatório'
    },

    municipio: {
        type: String,
        required: 'O Municipio do endereço do Cliente é obrigatório'
    },

    complemento: {
        type: String,
        required: 'O complemento do endereço do Cliente é obrigatório'
    },

});

module.exports = mongoose.model('Clientes', ClienteSchema);