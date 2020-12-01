import { Component, OnInit } from "@angular/core";
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {
  constructor(
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=> {
        console.log(error);
      }
    )
  }
}
