import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoModel } from './cadastro-produto.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroProdutoService {

  constructor(private http: HttpClient) { }

  cadastrarProdutos(produto: ProdutoModel): Observable<any>  {
    return this.http.post("http://localhost:3000/api/produtos", produto);
  }
}
