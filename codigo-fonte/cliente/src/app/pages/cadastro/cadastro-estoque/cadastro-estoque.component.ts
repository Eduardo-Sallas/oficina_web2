import { Component, OnInit } from '@angular/core';
import { EstoqueService } from 'src/app/services/estoque/estoque.service';
import { EstoqueModel } from './cadastro-estoque.model';

@Component({
  selector: 'app-cadastro-estoque',
  templateUrl: './cadastro-estoque.component.html'
})
export class CadastroEstoqueComponent implements OnInit {

  estoque: EstoqueModel = new EstoqueModel();

  onSubmit(form) {
    console.log(form);
  }

  constructor(private estoqueService: EstoqueService) {}

  ngOnInit() {}


  cadastrarEstoque() {
    console.log(this.estoque);
    this.estoqueService.cadastrarEstoques(this.estoque).subscribe(estoque => {
      this.estoque = new EstoqueModel();
      alert('Produto de Estoque cadastrado com sucesso!');

     
    }, 
      err => {
        console.log('Erro ao cadastrar Produto de Estoque');
        alert('Erro ao cadastrar Produto Produto de Estoque!');
    });
  }

}
