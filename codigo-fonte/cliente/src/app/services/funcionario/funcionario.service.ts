import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FuncionarioModel } from 'src/app/pages/cadastro/cadastro-funcionario/cadastro-funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  cadastrarFuncionarios(funcionario: FuncionarioModel): Observable<any> {
    return this.http.post("http://localhost:3000/api/funcionarios/", funcionario);
  }

  listarFuncionarios(): Observable<any> {
    return this.http.get("http://localhost:3000/api/funcionarios/");
  }

  atualizarFuncionario(id: any, funcionario: FuncionarioModel): Observable<any> {
    return this.http.put("http://localhost:3000/api/funcionarios/".concat(id), funcionario);
  }

  removerFuncionario(id:any) {
    return this.http.delete("http://localhost:3000/api/funcionarios/".concat(id));
  }
}
