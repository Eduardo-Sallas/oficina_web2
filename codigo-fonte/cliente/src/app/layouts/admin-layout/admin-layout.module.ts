import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";


import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
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
    UserComponent,
    TablesComponent,

    
    CadastroComponent,
    CadastroFuncionarioComponent,
    CadastroClienteComponent,
    CadastroProdutoComponent,
    CadastroOrcamentoComponent,


    ListarClientesComponent,
    ListarClientesComponent,
    ListarServicosComponent,
    ListarFuncionariosComponent,
    ListarProdutosComponent,
    ListarOrcamentosComponent,
  
    TypographyComponent,
    NotificationsComponent,

    // RtlComponent
  ],
  providers: [
  ]
})
export class AdminLayoutModule {}
