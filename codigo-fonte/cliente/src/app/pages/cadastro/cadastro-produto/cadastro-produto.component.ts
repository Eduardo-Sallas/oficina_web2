import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { ProdutoModel } from './cadastro-produto.model';


@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html'
})
export class CadastroProdutoComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel();

  onSubmit(form) {
    console.log(form);
  }

  constructor(private cadastroProdutoService: ProdutoService) {}

  ngOnInit() {}


  cadastrarProduto() {
    console.log(this.produto);
    this.cadastroProdutoService.cadastrarProdutos(this.produto).subscribe(produto => {
      this.produto = new ProdutoModel();
      alert('Produto cadastrado com sucesso!')

     
    }, 
      err => {
        console.log('Erro ao cadastrar Produto');
        alert('Erro ao cadastrar Produto!');
    });
  }


}

