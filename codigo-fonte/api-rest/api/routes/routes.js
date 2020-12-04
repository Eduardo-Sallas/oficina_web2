const express = require('express');
const router = express.Router();

// Rotas do Funcionário
const FuncionarioController = require('../controllers/funcionarioController');

// Rotas do Cliente
const ClienteController = require('../controllers/clienteController');

// Rotas do Produto

const ProdutoController = require('../controllers/produtoController');

// Rotas do Orçamento

const OrcamentoController = require('../controllers/orcamentoController');

// Rotas do Agendamento

const AgendamentoController = require('../controllers/agendamentoController');

// Rotas do Estoque

const EstoqueController = require('../controllers/estoqueController');

// Rotas do Servico

const ServicoController = require('../controllers/servicoController');


router.get('/funcionarios', FuncionarioController.listar_todos_funcionarios); // listar todos funcionarios
router.post('/funcionarios', FuncionarioController.criar_funcionario); // criar um funcionário

router.get('/funcionarios/:funcionarioId', FuncionarioController.listar_funcionario_por_id); // listar um funcionário pelo ID
router.put('/funcionarios/:funcionarioId', FuncionarioController.atualizar_funcionario); // atualizar um Funcionário pelo ID
router.delete('/funcionarios/:funcionarioId', FuncionarioController.remover_funcionario); // remover um funcionário pelo ID



router.get('/clientes', ClienteController.listar_todos_clientes);
router.post('/clientes', ClienteController.criar_cliente);

router.get('/clientes/:clienteId', ClienteController.listar_cliente_por_id);
router.put('/clientes/:clienteId', ClienteController.atualizar_cliente);
router.delete('/clientes/:clienteId', ClienteController.remover_cliente);



router.get('/produtos', ProdutoController.listar_todos_produtos);
router.post('/produtos', ProdutoController.criar_produto);

router.get('/produtos/:produtoId', ProdutoController.listar_produto_por_id);
router.put('/protudos/:produtoId', ProdutoController.atualizar_produto);
router.delete('/produtos/:produtoId', ProdutoController.remover_produto);



router.get('/orcamentos', OrcamentoController.listar_todos_orcamentos);
router.post('/orcamentos', OrcamentoController.criar_orcamento);

router.get('/orcamentos/:orcamentoId', OrcamentoController.listar_orcamento_por_id);
router.put('/orcamentos/:orcamentoId', OrcamentoController.atualizar_orcamentos);
router.delete('/orcamentos/:orcamentoId', OrcamentoController.remover_orcamento);



router.get('/agendamentos', AgendamentoController.listar_todos_agendamentos);
router.post('/agendamentos', AgendamentoController.criar_agendamento);

router.get('/agendamentos/:agendamentoId', AgendamentoController.listar_agendamento_por_id);
router.put('/agendamentos/:agendamentoId', AgendamentoController.atualizar_agendamento);
router.delete('/agendamentos/:agendamentoId', AgendamentoController.remover_agendamento);



router.get('/estoque', EstoqueController.listar_todos_produtos_do_estoque);
router.post('/estoque', EstoqueController.criar_produto_no_estoque);

router.get('estoque/:estoqueId', EstoqueController.listar_produto_por_id_no_estoque);
router.put('estoque/:estoqueId', EstoqueController.atualizar_produto_no_Estoque);
router.delete('estoque/:estoqueId', EstoqueController.remover_produto_do_estoque);


router.get('/servico', ServicoController.listar_todos_servicos);
router.post('/servico', ServicoController.criar_servico);

router.get('/servico', ServicoController.listar_servico_pelo_id);
router.put('/servico', ServicoController.atualizar_servico);
router.delete('/servico', ServicoController.remover_servico);


module.exports = router;