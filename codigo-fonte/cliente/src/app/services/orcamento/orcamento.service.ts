import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrcamentoModel } from 'src/app/pages/cadastro/cadastro-orcamento/cadastro-orcamento.model';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  constructor(private http: HttpClient) { }

  cadastrarOrcamentos(orcamento: OrcamentoModel): Observable<any> {
    return this.http.post("http://localhost:3000/api/orcamentos/", orcamento);
  }

  listarOrcamentos(): Observable<any> {
    return this.http.get("http://localhost:3000/api/orcamentos/");
  }

  atualizarOrcamento(id: any, orcamento: OrcamentoModel): Observable<any> {
    return this.http.put("http://localhost:3000/api/orcamentos/".concat(id), orcamento);
  }

  removerOrcamento(id:any) {
    return this.http.delete("http://localhost:3000/api/orcamentos/".concat(id));
  }
}
