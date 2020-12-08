import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteModel } from 'src/app/pages/cadastro/cadastro-cliente/cadastro-cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor(private http: HttpClient) { }


  cadastrarClientes(cliente: ClienteModel): Observable<any> {
    return this.http.post("http://localhost:3000/api/clientes/", cliente);
  }

  listarClientes(): Observable<any> {
    return this.http.get("http://localhost:3000/api/clientes/");
  }

  atualizarCliente(id: any, cliente: ClienteModel): Observable<any> {
    return this.http.put("http://localhost:3000/api/clientes/".concat(id), cliente);
  }

  removerCliente(id:any) {
    return this.http.delete("http://localhost:3000/api/clientes/".concat(id));
  }


}
