import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/services/servico/servico.service';
import { ServicoModel } from 'src/app/pages/cadastro/cadastro-servico/cadastro-servico.model';

@Component({
  selector: 'app-cadastro-servico',
  templateUrl: './cadastro-servico.component.html'
})
export class CadastroServicoComponent implements OnInit {

  servico: ServicoModel = new ServicoModel();

  onSubmit(form) {
    console.log(form);
  }

  constructor(private servicoService: ServicoService) {}

  ngOnInit() {}


  cadastrarServico() {
    console.log(this.servico);
    this.servicoService.cadastrarServicos(this.servico).subscribe(servico => {
      this.servico = new ServicoModel();
      alert('Serviço cadastrado com sucesso!')

     
    }, 
      err => {
        console.log('Erro ao cadastrar Serviço');
        alert('Erro ao cadastrar Serviço!');
    });
  }

}
