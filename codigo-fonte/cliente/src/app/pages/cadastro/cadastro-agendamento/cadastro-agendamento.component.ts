import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';
import { AgendamentoModel } from './cadastro-agendamento.model';

@Component({
  selector: 'app-cadastro-agendamento',
  templateUrl: './cadastro-agendamento.component.html'
})
export class CadastroAgendamentoComponent implements OnInit {

  agendamento: AgendamentoModel = new AgendamentoModel();

  constructor(private agendamentoService: AgendamentoService, ) {}

  onSubmit(form) {
    console.log(form);
  }

  ngOnInit() {}

  cadastrarAgendamento() {
    console.log(this.agendamentoService);
    this.agendamentoService.cadastrarAgendamentos(this.agendamento).subscribe(agendamento => {
      this.agendamento = new AgendamentoModel();
   
      alert('Agendamento cadastrado com sucesso!')

     
    }, 
      err => {
        console.log('Erro ao cadastrar Agendamento');
        alert('Erro ao cadastrar Agendamento!');
    });
  }

}
