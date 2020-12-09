import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/services/servico/servico.service';
import { ServicoModel } from '../../cadastro/cadastro-servico/cadastro-servico.model';

@Component({
  selector: 'app-listar-servicos',
  templateUrl: './listar-servicos.component.html'
})
export class ListarServicosComponent implements OnInit {

  servico: ServicoModel = new ServicoModel();
  servicos: Array<any> = new Array();

  pegaId: any;

  onSubmit(form) {
    console.log(form);
  }

  constructor(private servicoService: ServicoService) { }

  ngOnInit() {
    this.listarAllServicos();
    
  }

  atualizarServico(id: any) {
    this.servicoService.atualizarServico(this.pegaId, this.servico).subscribe(_servico => {
  
      this.servico = new ServicoModel();
      this.listarAllServicos();
      console.log(this.listarAllServicos());

      alert('Serviço atualizado com sucesso');
    }, err => {
      alert('Erro ao atualizar o Serviço');
      console.log('Erro ao atualizar o Serviço', err)
    });
  }

  removerServico(id: any) {
    this.servicoService.removerServico(id).subscribe(servico => {
      this.servico = new ServicoModel();
      this.listarAllServicos();
      alert('Serviço Removido com Sucesso');
    },
     err => {
      alert('Erro ao remover o Serviço');
      console.log('Erro ao remover o Serviço', err)
    });
  }


  listarAllServicos() {
    this.servicoService.listarServicos().subscribe(servicos => {
      this.servicos = servicos;
    }, err => {
      alert('Erro ao listar os Serviços');
      console.log('Erro ao listar os Serviços', err)
    });

  }

}
