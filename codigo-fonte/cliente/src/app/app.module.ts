import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { LoginComponent } from './pages/login/login.component';
import { ListarClientesService } from './pages/listar/listar-clientes/listar-clientes.service';
import { AuthService } from './pages/login/auth.service';
import { ListarFuncionariosService } from './pages/listar/listar-funcionarios/listar-funcionarios.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ListarProdutosService } from './pages/listar/listar-produtos/listar-produtos.service';







@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserModule,
    CommonModule
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, LoginComponent ],
  
  providers: [ListarClientesService, HttpClientModule, AuthService, ListarFuncionariosService, ListarProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
