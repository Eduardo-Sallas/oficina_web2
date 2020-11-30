const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
     dataAgendamento: String,
     nomeDoSolicitante: String
});

const modelName = 'Agendamento';

if(mongoose.connection && mongoose.connection.models[modelName]) {
    module.exports = mongoose.connection.models[modelName];
} else {
    module.exports = mongoose.model(modelName, modelSchema);
}