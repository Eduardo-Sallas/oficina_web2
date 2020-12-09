import { Component, OnInit } from "@angular/core";
import { FuncionarioService } from 'src/app/services/funcionario/funcionario.service';
import { FuncionarioModel } from './cadastro-funcionario.model';


@Component({
  selector: "app-cadastro-funcionarios",
  templateUrl: "cadastro-funcionario.component.html"
})
export class CadastroFuncionarioComponent implements OnInit {


  funcionario: FuncionarioModel = new FuncionarioModel();

  constructor(private funcionarioService: FuncionarioService, ) {}

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
