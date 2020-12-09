import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';
import { AgendamentoModel } from '../../cadastro/cadastro-agendamento/cadastro-agendamento.model';

@Component({
  selector: 'app-listar-agendamento',
  templateUrl: './listar-agendamento.component.html'
})
export class ListarAgendamentoComponent implements OnInit {

  agendamento: AgendamentoModel = new AgendamentoModel();
  agendamentos: Array<any> = new Array();

  pegaId: any;

  onSubmit(form) {
    console.log(form);
  }

  constructor(private agendamentoService: AgendamentoService) { }

  ngOnInit() {
    this.listarAllAgendamentos();
    console.log(this.listarAllAgendamentos());
  }

  atualizarAgendamento(id: any) {
    this.agendamentoService.atualizarAgendamento(this.pegaId, this.agendamento).subscribe(_agendamento => {
  
      this.agendamento = new AgendamentoModel();
      this.listarAllAgendamentos();
      console.log(this.listarAllAgendamentos());

      alert('Agendamento atualizado com sucesso');
    }, err => {
      alert('Erro ao atualizar o Agendamento');
      console.log('Erro ao atualizar o Agendamento', err)
    });
  }

  removerAgendamento(id: any) {
    this.agendamentoService.removerAgendamento(id).subscribe(agendamento => {
      this.agendamento = new AgendamentoModel();
      this.listarAllAgendamentos();
      alert('Agendamento Removido com Sucesso');
    },
     err => {
      alert('Erro ao remover o Agendamento');
      console.log('Erro ao remover o Agendamento', err)
    });
  }


  listarAllAgendamentos() {
    this.agendamentoService.listarAgendamentos().subscribe(agendamentos => {
      this.agendamentos = agendamentos;
    }, err => {
      alert('Erro ao listar os Agendamentos');
      console.log('Erro ao listar os Agendamentos', err)
    });

  }

}
