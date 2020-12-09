import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgendamentoModel } from 'src/app/pages/cadastro/cadastro-agendamento/cadastro-agendamento.model';


@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor(private http: HttpClient) { }


  cadastrarAgendamentos(agendamento: AgendamentoModel): Observable<any> {
    return this.http.post("http://localhost:3000/api/agendamentos/", agendamento);
  }

  listarAgendamentos(): Observable<any> {
    return this.http.get("http://localhost:3000/api/agendamentos/");
  }

  atualizarAgendamento(id: any, agendamento: AgendamentoModel): Observable<any> {
    return this.http.put("http://localhost:3000/api/agendamentos/".concat(id), agendamento);
  }

  removerAgendamento(id:any) {
    return this.http.delete("http://localhost:3000/api/agendamentos/".concat(id));
  }
}
