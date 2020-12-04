import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteModel } from './cadastro-cliente.model';


@Injectable({
  providedIn: 'root'
})
export class CadastroClienteService {

  constructor(private http: HttpClient) { }

  cadastrarClientes(cliente: ClienteModel): Observable<any>  {
    return this.http.post("http://localhost:3000/api/clientes", cliente);
  }

}
