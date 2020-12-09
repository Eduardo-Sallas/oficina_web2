import { Component, OnInit } from '@angular/core';
import { OrcamentoService } from 'src/app/services/orcamento/orcamento.service';
import { OrcamentoModel } from '../../cadastro/cadastro-orcamento/cadastro-orcamento.model';


@Component({
  selector: 'app-listar-orcamentos',
  templateUrl: './listar-orcamentos.component.html'
})
export class ListarOrcamentosComponent implements OnInit {

  orcamento: OrcamentoModel = new OrcamentoModel();
  orcamentos: Array<any> = new Array();

  pegaId: any;

  onSubmit(form) {
    console.log(form);
  }

  constructor(private orcamentoService: OrcamentoService) { }

  ngOnInit() {
    this.listarAllOrcamentos();
    
  }

  atualizarOrcamento(id: any) {
    this.orcamentoService.atualizarOrcamento(this.pegaId, this.orcamento).subscribe(_orcamento => {
  
      this.orcamento = new OrcamentoModel();
      this.listarAllOrcamentos();
      console.log(this.listarAllOrcamentos());

      alert('Orçamento atualizado com sucesso');
    }, err => {
      alert('Erro ao atualizar o Orçamento');
      console.log('Erro ao atualizar o Orçamento', err)
    });
  }

  removerOrcamento(id: any) {
    this.orcamentoService.removerOrcamento(id).subscribe(orcamento => {
      this.orcamento = new OrcamentoModel();
      this.listarAllOrcamentos();
      alert('Orçamento Removido com Sucesso');
    },
     err => {
      alert('Erro ao remover o Orçamento');
      console.log('Erro ao remover o Funcionario', err)
    });
  }


  listarAllOrcamentos() {
    this.orcamentoService.listarOrcamentos().subscribe(orcamentos => {
      this.orcamentos = orcamentos;
    }, err => {
      alert('Erro ao listar os Orçamentos');
      console.log('Erro ao listar os Orçamentos', err)
    });

  }

}
