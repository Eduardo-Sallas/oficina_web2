import { Component, OnInit } from '@angular/core';
import { EstoqueService } from 'src/app/services/estoque/estoque.service';
import { EstoqueModel } from '../../cadastro/cadastro-estoque/cadastro-estoque.model';

@Component({
  selector: 'app-listar-estoque',
  templateUrl: './listar-estoque.component.html'
})
export class ListarEstoqueComponent implements OnInit {

  estoque: EstoqueModel = new EstoqueModel();
  estoques: Array<any> = new Array();

  pegaId: any;

  onSubmit(form) {
    console.log(form);
  }

  constructor(private estoqueService: EstoqueService) { }

  ngOnInit() {
    this.listarAllEstoques();
    
  }

  atualizarEstoque(id: any) {
    this.estoqueService.atualizarEstoque(this.pegaId, this.estoque).subscribe(_estoque => {
  
      this.estoque = new EstoqueModel();
      this.listarAllEstoques();
      console.log(this.listarAllEstoques());

      alert('Estoque atualizado com sucesso');
    }, err => {
      alert('Erro ao atualizar o Estoque');
      console.log('Erro ao atualizar o Estoque', err)
    });
  }

  removerEstoque(id: any) {
    this.estoqueService.removerEstoque(id).subscribe(estoque => {
      this.estoque = new EstoqueModel();
      this.listarAllEstoques();
      alert('Estoque Removido com Sucesso');
    },
     err => {
      alert('Erro ao remover o Estoque');
      console.log('Erro ao remover o Estoque', err)
    });
  }


  listarAllEstoques() {
    this.estoqueService.listarEstoques().subscribe(estoques => {
      this.estoques = estoques;
    }, err => {
      alert('Erro ao listar os Estoques');
      console.log('Erro ao listar os Estoques', err)
    });

  }

}
