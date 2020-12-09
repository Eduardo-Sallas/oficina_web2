import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario/funcionario.service';
import { FuncionarioModel } from '../../cadastro/cadastro-funcionario/cadastro-funcionario.model';


@Component({
  selector: 'app-listar-funcionarios',
  templateUrl: './listar-funcionarios.component.html'
})
export class ListarFuncionariosComponent implements OnInit {

  funcionario: FuncionarioModel = new FuncionarioModel();
  funcionarios: Array<any> = new Array();

  pegaId: any;

  onSubmit(form) {
    console.log(form);
  }

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.listarAllFuncionarios();
    
  }

  atualizarFuncionario(id: any) {
    this.funcionarioService.atualizarFuncionario(this.pegaId, this.funcionario).subscribe(_funcionario => {
  
      this.funcionario = new FuncionarioModel();
      this.listarAllFuncionarios();
      console.log(this.listarAllFuncionarios());

      alert('Funcionario atualizado com sucesso');
    }, err => {
      alert('Erro ao atualizar o Funcionario');
      console.log('Erro ao atualizar o Funcionario', err)
    });
  }

  removerFuncionario(id: any) {
    this.funcionarioService.removerFuncionario(id).subscribe(funcionario => {
      this.funcionario = new FuncionarioModel();
      this.listarAllFuncionarios();
      alert('Funcionario Removido com Sucesso');
    },
     err => {
      alert('Erro ao remover o Funcionario');
      console.log('Erro ao remover o Funcionario', err)
    });
  }


  listarAllFuncionarios() {
    this.funcionarioService.listarFuncionarios().subscribe(funcionarios => {
      this.funcionarios = funcionarios;
    }, err => {
      alert('Erro ao listar o Funcionario');
      console.log('Erro ao listar os Funcionarios', err)
    });

  }

}
