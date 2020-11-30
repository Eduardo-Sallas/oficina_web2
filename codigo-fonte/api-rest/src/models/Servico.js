const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
    idUser: String,
     nomeVeiculo: String,
     images: [Object],
     dateCreated: Date,
     categoria: String,
     preco: Number,
     precoComDesconto: Boolean,
     descricao: String,
     status: String
});

const modelName = 'Servico';

if(mongoose.connection && mongoose.connection.models[modelName]) {
    module.exports = mongoose.connection.models[modelName];
} else {
    module.exports = mongoose.model(modelName, modelSchema);
}