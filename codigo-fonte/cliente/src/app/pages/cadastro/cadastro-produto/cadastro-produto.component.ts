import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from './cadastro-produto.model';
import { CadastroProdutoService } from './cadastro-produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel();

  onSubmit(form) {
    console.log(form);
  }

  constructor(private cadastroProdutoService: CadastroProdutoService) {}

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

