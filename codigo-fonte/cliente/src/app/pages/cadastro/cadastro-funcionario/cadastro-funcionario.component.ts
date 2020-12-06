import { Component, OnInit } from "@angular/core";
import { FuncionarioModel } from './cadastro-funcionario.model';

import { CadastroFuncionarioService } from './cadastro-funcionario.service';

@Component({
  selector: "app-cadastro-funcionarios",
  templateUrl: "cadastro-funcionario.component.html"
})
export class CadastroFuncionarioComponent implements OnInit {


  funcionario: FuncionarioModel = new FuncionarioModel();

  constructor(private funcionarioService: CadastroFuncionarioService, ) {}

  onSubmit(form) {
    console.log(form);
  }

  ngOnInit() {}

  cadastrarFuncionario() {
    console.log(this.funcionarioService);
    this.funcionarioService.cadastrarFuncionarios(this.funcionario).subscribe(funcionario => {
      this.funcionario = new FuncionarioModel();
   
      alert('Funcionario cadastrado com sucesso!')

     
    }, 
      err => {
        console.log('Erro ao cadastrar Funcionario');
        alert('Erro ao cadastrar Funcionario!');
    });
  }
}
