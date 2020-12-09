// associando as dependências instaladas
const express = require('express');
 const app = express();
 const cors = require('cors');
 
 port = process.env.PORT || 3000,
 mongoose = require('mongoose');

 Funcionario = require('./api/models/funcionarioModel');
 Cliente = require('./api/models/clienteModel');
 Produto = require('./api/models/produtoModel');
 Orcamento = require('./api/models/orcamentoModel');
 Agendamento = require('./api/models/agendamentoModel');
 Servico = require('./api/models/servicoModel');
 Estoque = require('./api/models/estoqueModel');
 Fornecedor = require('./api/models/fornecedorModel');

 bodyParser = require('body-parser');

 const routes = require('./api/routes/routes');


 // mongoose
 mongoose.Promisse = global.Promise;
 mongoose.connect('mongodb://localhost:27017/OficinaWebAPI', { useNewUrlParser:true , useUnifiedTopology: true});

app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', routes);

// Escutar a porta
 app.listen(port);
 console.log('Restfull API server started on: ' + port);