import { Component, OnInit } from "@angular/core";
import { ListarClientesService } from '../../listar/listar-clientes/listar-clientes.service';
import { ClienteModel } from './cadastro-cliente.model';
import { CadastroClienteService } from './cadastro-cliente.service';

@Component({
  selector: "app-cadastro-cliente",
  templateUrl: "cadastro-cliente.component.html"
})
export class CadastroClienteComponent implements OnInit {

  cliente: ClienteModel = new ClienteModel();

  onSubmit(form) {
    console.log(form);
  }

  constructor(private cadastroClienteService: CadastroClienteService, private listarCliente: ListarClientesService) {}

  ngOnInit() {}

  cadastrarCliente() {
    console.log(this.cliente);
    this.cadastroClienteService.cadastrarClientes(this.cliente).subscribe(cliente => {
      this.cliente = new ClienteModel();
      this.listarCliente.ListarClientes();

     
    }, 
      err => {console.log('Erro ao cadastrar Cliente')
    });
  }




}
