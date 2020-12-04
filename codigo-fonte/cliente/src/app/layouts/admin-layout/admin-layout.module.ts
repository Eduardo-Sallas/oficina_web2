import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { MapComponent } from "../../pages/map/map.component";
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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    PaginaInicialComponent,
    UserComponent,
    TablesComponent,
    CadastroComponent,
    CadastroFuncionarioComponent,
    CadastroClienteComponent,
    ListarClientesComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
