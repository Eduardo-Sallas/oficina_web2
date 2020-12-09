import { Component, OnInit } from '@angular/core';
import { FornecedorService } from 'src/app/services/fornecedor/fornecedor.service';
import { FornecedorModel } from '../../cadastro/cadastro-fornecedor/cadastro-fornecedor.model';

@Component({
  selector: 'app-listar-fornecedor',
  templateUrl: './listar-fornecedor.component.html'
})
export class ListarFornecedorComponent implements OnInit {
  
  fornecedor: FornecedorModel = new FornecedorModel();
  fornecedores: Array<any> = new Array();

  pegaId: any;

  onSubmit(form) {
    console.log(form);
  }

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit() {
    this.listarAllFornecedores();
    console.log(this.listarAllFornecedores());
  }

  atualizarFornecedor(id: any) {
    this.fornecedorService.atualizarFornecedor(this.pegaId, this.fornecedor).subscribe(_fornecedor => {
  
      this.fornecedor = new FornecedorModel();
      this.listarAllFornecedores();
      console.log(this.listarAllFornecedores());

      alert('Fornecedor atualizado com sucesso');
    }, err => {
      alert('Erro ao atualizar o Fornecedor');
      console.log('Erro ao atualizar o Fornecedor', err)
    });
  }

  removerFornecedor(id: any) {
    this.fornecedorService.removerFornecedor(id).subscribe(fornecedor => {
      this.fornecedor = new FornecedorModel();
      this.listarAllFornecedores();
      alert('Fornecedor Removido com Sucesso');
    },
     err => {
      alert('Erro ao remover o Fornecedor');
      console.log('Erro ao remover o Fornecedor', err)
    });
  }


  listarAllFornecedores() {
    this.fornecedorService.listarFornecedor().subscribe(fornecedores => {
      this.fornecedores = fornecedores;
    }, err => {
      alert('Erro ao listar os Fornecedores');
      console.log('Erro ao listar os Fornecedores', err)
    });

  }

}
