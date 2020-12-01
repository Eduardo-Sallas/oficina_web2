import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  SERVER_URL = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  public getUsuarios() {
    return this.http.get(`${this.SERVER_URL}/states`);
  }
}
