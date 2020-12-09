import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoModel } from 'src/app/pages/cadastro/cadastro-produto/cadastro-produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  
  constructor(private http: HttpClient) { }


  cadastrarProdutos(produto: ProdutoModel): Observable<any> {
    return this.http.post("http://localhost:3000/api/produtos/", produto);
  }

  listarProdutos(): Observable<any> {
    return this.http.get("http://localhost:3000/api/produtos/");
  }

  atualizarProduto(id: any, produto: ProdutoModel): Observable<any> {
    return this.http.put("http://localhost:3000/api/produtos/".concat(id), produto);
  }

  removerProduto(id:any) {
    return this.http.delete("http://localhost:3000/api/produtos/".concat(id));
  }

  
}
