import { Component, OnInit } from '@angular/core';
import { ListarFuncionariosService } from './listar-funcionarios.service';

@Component({
  selector: 'app-listar-funcionarios',
  templateUrl: './listar-funcionarios.component.html',
  styleUrls: ['./listar-funcionarios.component.scss']
})
export class ListarFuncionariosComponent implements OnInit {

  funcionarios: Array<any> = new Array();

  constructor(private funcionarioService: ListarFuncionariosService) { }

  ngOnInit() {
    this.listarAllFuncionarios();
  }
  listarAllFuncionarios() {

    this.funcionarioService.ListarFuncionarios().subscribe(funcionarios => {
      this.funcionarios = funcionarios;
    }, err => {
      console.log('Erro ao listar os Funcionarios', err)
    });

  }

}
