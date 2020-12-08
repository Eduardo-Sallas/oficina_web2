import { Component, OnInit } from "@angular/core";
import { ClienteServiceService } from 'src/app/services/cliente/cliente-service.service';
import { ClienteModel } from './cadastro-cliente.model';


@Component({
  selector: "app-cadastro-cliente",
  templateUrl: "cadastro-cliente.component.html"
})
export class CadastroClienteComponent implements OnInit {

  cliente: ClienteModel = new ClienteModel();
  
  onSubmit(form) {
    console.log(form);
  }

  constructor(private clienteService: ClienteServiceService) {}

  ngOnInit() {}

  

  cadastrarCliente() {
    console.log(this.cliente);
    this.clienteService.cadastrarClientes(this.cliente).subscribe(cliente => {
      this.cliente = new ClienteModel();
      this.clienteService.listarClientes();
      alert('Cliente cadastrado com sucesso!')

     
    }, 
      err => {
        console.log('Erro ao cadastrar Cliente');
        alert('Erro ao cadastrar Cliente!');
    });
  }




}
