const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
    name: String,
    setor: String,
    dataNascimento: Date,
    cpf: String
});

const modelName = 'Funcionario';

if(mongoose.connection && mongoose.connection.models[modelName]) {
    module.exports = mongoose.connection.models[modelName];
} else {
    module.exports = mongoose.model(modelName, modelSchema);
}
