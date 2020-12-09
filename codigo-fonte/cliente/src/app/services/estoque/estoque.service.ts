import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstoqueModel } from 'src/app/pages/cadastro/cadastro-estoque/cadastro-estoque.model';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private http: HttpClient) { }


  cadastrarEstoques(estoque: EstoqueModel): Observable<any> {
    return this.http.post("http://localhost:3000/api/estoque/", estoque);
  }

  listarEstoques(): Observable<any> {
    return this.http.get("http://localhost:3000/api/estoque/");
  }

  atualizarEstoque(id: any, estoque: EstoqueModel): Observable<any> {
    return this.http.put("http://localhost:3000/api/estoque/".concat(id), estoque);
  }

  removerEstoque(id:any) {
    return this.http.delete("http://localhost:3000/api/estoque/".concat(id));
  }
}
