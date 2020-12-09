import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicoModel } from 'src/app/pages/cadastro/cadastro-servico/cadastro-servico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient) { }


  cadastrarServicos(servico: ServicoModel): Observable<any> {
    return this.http.post("http://localhost:3000/api/servico/", servico);
  }

  listarServicos(): Observable<any> {
    return this.http.get("http://localhost:3000/api/servico/");
  }

  atualizarServico(id: any, servico: ServicoModel): Observable<any> {
    return this.http.put("http://localhost:3000/api/servico/".concat(id), servico);
  }

  removerServico(id:any) {
    return this.http.delete("http://localhost:3000/api/servico/".concat(id));
  }
}
