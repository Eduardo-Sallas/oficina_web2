import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarProdutosService {
  
  constructor(private http: HttpClient) { }

  ListarProdutos() : Observable<any> {
    return this.http.get("http://localhost:3000/api/produtos")
  }
}
