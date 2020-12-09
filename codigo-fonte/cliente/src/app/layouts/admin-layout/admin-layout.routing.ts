import { Routes } from "@angular/router";

import { PaginaInicialComponent } from "../../pages/Pagina-Inicial/pagina-inicial.component";


import { CadastroComponent } from 'src/app/pages/cadastro/cadastro.component';
import { CadastroFuncionarioComponent } from 'src/app/pages/cadastro/cadastro-funcionario/cadastro-funcionario.component';
import { CadastroClienteComponent } from 'src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component';
import { ListarClientesComponent } from 'src/app/pages/listar/listar-clientes/listar-clientes.component';
import { ListarServicosComponent } from 'src/app/pages/listar/listar-servicos/listar-servicos.component';
import { ListarFuncionariosComponent } from 'src/app/pages/listar/listar-funcionarios/listar-funcionarios.component';
import { CadastroProdutoComponent } from 'src/app/pages/cadastro/cadastro-produto/cadastro-produto.component';
import { ListarProdutosComponent } from 'src/app/pages/listar/listar-produtos/listar-produtos.component';
import { CadastroOrcamentoComponent } from 'src/app/pages/cadastro/cadastro-orcamento/cadastro-orcamento.component';
import { ListarOrcamentosComponent } from 'src/app/pages/listar/listar-orcamentos/listar-orcamentos.component';
import { CadastroAgendamentoComponent } from 'src/app/pages/cadastro/cadastro-agendamento/cadastro-agendamento.component';
import { CadastroServicoComponent } from 'src/app/pages/cadastro/cadastro-servico/cadastro-servico.component';
import { CadastroEstoqueComponent } from 'src/app/pages/cadastro/cadastro-estoque/cadastro-estoque.component';
import { CadastroFornecedorComponent } from 'src/app/pages/cadastro/cadastro-fornecedor/cadastro-fornecedor.component';
import { ListarEstoqueComponent } from 'src/app/pages/listar/listar-estoque/listar-estoque.component';
import { ListarFornecedorComponent } from 'src/app/pages/listar/listar-fornecedor/listar-fornecedor.component';
import { ListarAgendamentoComponent } from 'src/app/pages/listar/listar-agendamento/listar-agendamento.component';
import { ListarComponent } from 'src/app/pages/listar/listar.component';


// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "paginaInicial", component: PaginaInicialComponent },

  // Rotas de Cadastro
  { path: "cadastro", component: CadastroComponent },

  { path: "cadastrarFuncionario", component: CadastroFuncionarioComponent },
  { path: "cadastrarCliente", component: CadastroClienteComponent },
  { path: "cadastrarProduto", component: CadastroProdutoComponent},
  { path: "cadastrarOrcamento", component: CadastroOrcamentoComponent},
  { path: "cadastrarAgendamento", component: CadastroAgendamentoComponent},
  { path: "cadastrarServico", component: CadastroServicoComponent},
  { path: "cadastrarEstoque", component: CadastroEstoqueComponent},
  { path: "cadastrarFornecedor", component: CadastroFornecedorComponent},


    // Rotas de Listagens
    { path: "listar", component: ListarComponent},

  { path: "listarClientes", component: ListarClientesComponent},
  { path: "listarFuncionarios", component: ListarFuncionariosComponent},
  { path: "listarServicos", component: ListarServicosComponent },
  { path: "listarProdutos", component: ListarProdutosComponent },
  { path: "listarOrcamentos", component: ListarOrcamentosComponent},
  { path: "listarEstoque", component: ListarEstoqueComponent},
  { path: "listarFornecedor", component: ListarFornecedorComponent},
  { path: "listarAgendamento", component: ListarAgendamentoComponent},
  



  // { path: "rtl", component: RtlComponent }
];
