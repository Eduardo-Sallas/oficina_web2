import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FuncionarioModel } from './cadastro-funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroFuncionarioService {

  constructor(private http: HttpClient) { }

  
  cadastrarFuncionarios(funcionario: FuncionarioModel): Observable<any>  {
    return this.http.post("http://localhost:3000/api/funcionarios", funcionario);
  }
}
