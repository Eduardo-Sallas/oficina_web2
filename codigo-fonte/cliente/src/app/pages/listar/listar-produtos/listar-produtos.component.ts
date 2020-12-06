import { Component, OnInit } from '@angular/core';
import { ListarProdutosService } from './listar-produtos.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.scss']
})
export class ListarProdutosComponent implements OnInit {

  produtos: Array<any> = new Array();

  constructor(private produtoService: ListarProdutosService) { }

  ngOnInit() {
    this.listarAllProdutos();
  }
  listarAllProdutos() {

    this.produtoService.ListarProdutos().subscribe(produtos => {
      this.produtos = produtos;
    }, err => {
      console.log('Erro ao listar os Produtos', err)
    });

  }


}
