import { Routes } from "@angular/router";

import { PaginaInicialComponent } from "../../pages/Pagina-Inicial/pagina-inicial.component";

import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
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


// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "paginaInicial", component: PaginaInicialComponent },

  // Rotas de Cadastro
  { path: "cadastro", component: CadastroComponent },

  { path: "cadastrarFuncionario", component: CadastroFuncionarioComponent },
  { path: "cadastrarCliente", component: CadastroClienteComponent },
  { path: "cadastrarProduto", component: CadastroProdutoComponent},
  { path: "cadastrarOrcamento", component: CadastroOrcamentoComponent},

    // Rotas de Listagens
  { path: "listarClientes", component: ListarClientesComponent},
  { path: "listarFuncionarios", component: ListarFuncionariosComponent},
  { path: "listarServicos", component: ListarServicosComponent },
  { path: "listarProdutos", component: ListarProdutosComponent },
  { path: "listarOrcamentos", component: ListarOrcamentosComponent},



  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  // { path: "rtl", component: RtlComponent }
];
