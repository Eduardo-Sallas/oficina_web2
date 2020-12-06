import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarFuncionariosService {

  constructor(private http: HttpClient) { }

  ListarFuncionarios() : Observable<any> {
    return this.http.get("http://localhost:3000/api/funcionarios")
  }
}
