import { Component, OnInit } from '@angular/core';
import { FornecedorService } from 'src/app/services/fornecedor/fornecedor.service';
import { FornecedorModel } from './cadastro-fornecedor.model';

@Component({
  selector: 'app-cadastro-fornecedor',
  templateUrl: './cadastro-fornecedor.component.html'
})
export class CadastroFornecedorComponent implements OnInit {

  fornecedor: FornecedorModel = new FornecedorModel();

  onSubmit(form) {
    console.log(form);
  }

  constructor(private fornecedorService: FornecedorService) {}

  ngOnInit() {}


  cadastrarFornecedor() {
    console.log(this.fornecedor);
    this.fornecedorService.cadastrarFornecedor(this.fornecedor).subscribe(fornecedor => {
      alert('Fornecedor cadastrado com sucesso!');
      this.fornecedor = new FornecedorModel();

     
    }, 
      err => {
        console.log('Erro ao cadastrar Fornecedor');
        alert('Erro ao cadastrar Fornecedor!');
    });
  }

}
