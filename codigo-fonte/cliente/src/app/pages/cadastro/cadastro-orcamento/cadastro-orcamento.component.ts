import { Component, OnInit } from '@angular/core';
import { OrcamentoService } from 'src/app/services/orcamento/orcamento.service';
import { OrcamentoModel } from './cadastro-orcamento.model';



@Component({
  selector: 'app-cadastro-orcamento',
  templateUrl: './cadastro-orcamento.component.html',
})
export class CadastroOrcamentoComponent implements OnInit {

  orcamento: OrcamentoModel = new OrcamentoModel();



  constructor(private orcamentoService: OrcamentoService, ) {}

  onSubmit(form) {
    console.log(form);
  }

  ngOnInit() {

  }

  cadastrarOrcamento() {
    console.log(this.orcamentoService);
    this.orcamentoService.cadastrarOrcamentos(this.orcamento).subscribe(orcamento => {
      this.orcamento = new OrcamentoModel();
   
      alert('Orçamento cadastrado com sucesso!')

     
    }, 
      err => {
        console.log('Erro ao cadastrar Orçamento');
        alert('Erro ao cadastrar Orçamento!');
    });
  }

}
