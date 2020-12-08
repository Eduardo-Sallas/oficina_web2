import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from 'src/app/services/cliente/cliente-service.service';
import { ClienteModel } from '../../cadastro/cadastro-cliente/cadastro-cliente.model';


@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html'
})
export class ListarClientesComponent implements OnInit {

  cliente: ClienteModel = new ClienteModel();
  clientes: Array<any> = new Array();

  onSubmit(form) {
    console.log(form);
  }

  constructor(private clientesService: ClienteServiceService) { }

  ngOnInit() {
    this.listarAllClientes();
    console.log(this.listarAllClientes());
  }

  atualizarCliente(id: any) {
    this.clientesService.atualizarCliente(id, this.cliente).subscribe(_cliente => {
      this.cliente = new ClienteModel();
      this.listarAllClientes();
      console.log(this.listarAllClientes());

      alert('Cliente atualizado com sucesso');
    }, err => {
      alert('Erro ao atualizar o Cliente');
      console.log('Erro ao atualizar o Cliente', err)
    });
  }

  removerCliente(id: any) {
    this.clientesService.removerCliente(id).subscribe(cliente => {
      this.cliente = new ClienteModel();
      this.listarAllClientes();
      alert('Cliente Removido com Sucesso');
    },
     err => {
      alert('Erro ao remover o Cliente');
      console.log('Erro ao remover o Cliente', err)
    });
  }


  listarAllClientes() {
    this.clientesService.listarClientes().subscribe(clientes => {
      this.clientes = clientes;
    }, err => {
      alert('Erro ao listar o Cliente');
      console.log('Erro ao listar os Clientes', err)
    });

  }

}
