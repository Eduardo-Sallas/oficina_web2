import { Component, OnInit } from '@angular/core';
import { OrcamentoModel } from './cadastro-orcamento.model';
import { CadastroOrcamentoService } from './cadastro-orcamento.service';
import { TipoSolicitacaoModel } from './tipo-solicitacao.model.component';

@Component({
  selector: 'app-cadastro-orcamento',
  templateUrl: './cadastro-orcamento.component.html',
  styleUrls: ['./cadastro-orcamento.component.scss']
})
export class CadastroOrcamentoComponent implements OnInit {

  orcamento: OrcamentoModel = new OrcamentoModel();



  constructor(private orcamentoService: CadastroOrcamentoService, ) {}

  onSubmit(form) {
    console.log(form);
  }

  ngOnInit() {

  }

  cadastrarOrcamento() {
    console.log(this.orcamentoService);
    this.orcamentoService.cadastrarOrcamento(this.orcamento).subscribe(orcamento => {
      this.orcamento = new OrcamentoModel();
   
      alert('Orçamento cadastrado com sucesso!')

     
    }, 
      err => {
        console.log('Erro ao cadastrar Orçamento');
        alert('Erro ao cadastrar Orçamento!');
    });
  }

}
