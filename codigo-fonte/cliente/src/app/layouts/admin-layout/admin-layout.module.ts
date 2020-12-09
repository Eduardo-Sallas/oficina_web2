import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";



// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PaginaInicialComponent } from 'src/app/pages/Pagina-Inicial/pagina-inicial.component';
import { CadastroComponent } from 'src/app/pages/cadastro/cadastro.component';
import { CadastroFuncionarioComponent } from 'src/app/pages/cadastro/cadastro-funcionario/cadastro-funcionario.component';
import { ListarClientesComponent } from 'src/app/pages/listar/listar-clientes/listar-clientes.component';
import { CadastroClienteComponent } from 'src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.component';
import { ListarServicosComponent } from 'src/app/pages/listar/listar-servicos/listar-servicos.component';
import { ListarFuncionariosComponent } from 'src/app/pages/listar/listar-funcionarios/listar-funcionarios.component';
import { CadastroProdutoComponent } from 'src/app/pages/cadastro/cadastro-produto/cadastro-produto.component';
import { ListarProdutosComponent } from 'src/app/pages/listar/listar-produtos/listar-produtos.component';
import { CadastroOrcamentoComponent } from 'src/app/pages/cadastro/cadastro-orcamento/cadastro-orcamento.component';
import { ListarOrcamentosComponent } from 'src/app/pages/listar/listar-orcamentos/listar-orcamentos.component';
import { CadastroFornecedorComponent } from 'src/app/pages/cadastro/cadastro-fornecedor/cadastro-fornecedor.component';
import { CadastroEstoqueComponent } from 'src/app/pages/cadastro/cadastro-estoque/cadastro-estoque.component';
import { CadastroAgendamentoComponent } from 'src/app/pages/cadastro/cadastro-agendamento/cadastro-agendamento.component';
import { CadastroServicoComponent } from 'src/app/pages/cadastro/cadastro-servico/cadastro-servico.component';
import { ListarEstoqueComponent } from 'src/app/pages/listar/listar-estoque/listar-estoque.component';
import { ListarFornecedorComponent } from 'src/app/pages/listar/listar-fornecedor/listar-fornecedor.component';
import { ListarAgendamentoComponent } from 'src/app/pages/listar/listar-agendamento/listar-agendamento.component';
import { ListarComponent } from 'src/app/pages/listar/listar.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule
    
  ],
  declarations: [
    PaginaInicialComponent,

    
    CadastroComponent,
    CadastroFuncionarioComponent,
    CadastroClienteComponent,
    CadastroProdutoComponent,
    CadastroOrcamentoComponent,
    CadastroFornecedorComponent,
    CadastroEstoqueComponent,
    CadastroAgendamentoComponent,
    CadastroServicoComponent,

    ListarComponent,
    ListarClientesComponent,
    ListarServicosComponent,
    ListarFuncionariosComponent,
    ListarProdutosComponent,
    ListarOrcamentosComponent,
    ListarEstoqueComponent,
    ListarFornecedorComponent,
    ListarAgendamentoComponent,
  


    // RtlComponent
  ],
  providers: [
  ]
})
export class AdminLayoutModule {}
