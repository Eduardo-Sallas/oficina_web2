import { Component, OnInit } from '@angular/core';
import { ListarOrcamentosService } from './listar-orcamentos.service';

@Component({
  selector: 'app-listar-orcamentos',
  templateUrl: './listar-orcamentos.component.html',
  styleUrls: ['./listar-orcamentos.component.scss']
})
export class ListarOrcamentosComponent implements OnInit {

  orcamentos: Array<any> = new Array();

  constructor(private orcamentoService: ListarOrcamentosService) { }

  ngOnInit() {
    this.listarAllOrcamentos();
  }
  listarAllOrcamentos() {

    this.orcamentoService.ListarOrcamentos().subscribe(orcamentos => {
      this.orcamentos = orcamentos;
    }, err => {
      alert('Erro ao listar os Orçamentos, motivo: ' + err);
      console.log('Erro ao listar os Orçamentos', err)
    });

  }

}
