import { Component, OnInit } from '@angular/core';
import { ListarClientesService } from './listar-clientes.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html'
})
export class ListarClientesComponent implements OnInit {

  clientes: Array<any> = new Array();

  constructor(private clientesService: ListarClientesService) { }

  ngOnInit() {
    this.listarAllClientes();
  }
  listarAllClientes() {

    this.clientesService.ListarClientes().subscribe(clientes => {
      this.clientes = clientes;
    }, err => {
      console.log('Erro ao listar os alunos', err)
    });

  }

}
