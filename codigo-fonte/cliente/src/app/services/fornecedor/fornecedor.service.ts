import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FornecedorModel } from 'src/app/pages/cadastro/cadastro-fornecedor/cadastro-fornecedor.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(private http: HttpClient) { }


  cadastrarFornecedor(fornecedor: FornecedorModel): Observable<any> {
    return this.http.post("http://localhost:3000/api/fornecedor/", fornecedor);
  }

  listarFornecedor(): Observable<any> {
    return this.http.get("http://localhost:3000/api/fornecedor/");
  }

  atualizarFornecedor(id: any, fornecedor: FornecedorModel): Observable<any> {
    return this.http.put("http://localhost:3000/api/fornecedor/".concat(id), fornecedor);
  }

  removerFornecedor(id:any) {
    return this.http.delete("http://localhost:3000/api/fornecedor/".concat(id));
  }
}
