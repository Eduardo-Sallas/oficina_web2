import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListarClientesComponent } from './listar-clientes.component';

@Injectable({
  providedIn: 'root'
})
export class ListarClientesService {

  constructor(private http: HttpClient) { }

  ListarClientes() : Observable<any> {
    return this.http.get("http://localhost:3000/api/clientes")
  }
}
