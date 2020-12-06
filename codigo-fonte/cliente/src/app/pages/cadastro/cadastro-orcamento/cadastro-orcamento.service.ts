import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrcamentoModel } from './cadastro-orcamento.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroOrcamentoService {

  constructor(private http: HttpClient) { }

  cadastrarOrcamento(orcamento: OrcamentoModel): Observable<any>  {
    return this.http.post("http://localhost:3000/api/orcamentos", orcamento);
  }
}
