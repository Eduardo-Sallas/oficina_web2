import { TestBed } from '@angular/core/testing';

import { CadastroOrcamentoService } from './cadastro-orcamento.service';

describe('CadastroOrcamentoService', () => {
  let service: CadastroOrcamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroOrcamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
