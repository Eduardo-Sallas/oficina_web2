import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { ProdutoModel } from '../../cadastro/cadastro-produto/cadastro-produto.model';


@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html'
})
export class ListarProdutosComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel();
  produtos: Array<any> = new Array();

  pegaId: any;

  onSubmit(form) {
    console.log(form);
  }

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.listarAllProdutos();
    console.log(this.listarAllProdutos());
  }

  atualizarProduto(id: any) {
    this.produtoService.atualizarProduto(this.pegaId, this.produto).subscribe(_produto => {
  
      this.produto = new ProdutoModel();
      this.listarAllProdutos();
      console.log(this.listarAllProdutos());

      alert('Produto atualizado com sucesso');
    }, err => {
      alert('Erro ao atualizar o Produto');
      console.log('Erro ao atualizar o Produto', err)
    });
  }

  removerProduto(id: any) {
    this.produtoService.removerProduto(id).subscribe(produto => {
      this.produto = new ProdutoModel();
      this.listarAllProdutos();
      alert('Produto Removido com Sucesso');
    },
     err => {
      alert('Erro ao remover o Produto');
      console.log('Erro ao remover o Produto', err)
    });
  }


  listarAllProdutos() {
    this.produtoService.listarProdutos().subscribe(produtos => {
      this.produtos = produtos;
    }, err => {
      alert('Erro ao listar os Produtos');
      console.log('Erro ao listar os Produtos', err)
    });

  }


}
