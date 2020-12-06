import { TestBed } from '@angular/core/testing';

import { ListarOrcamentosService } from './listar-orcamentos.service';

describe('ListarOrcamentosService', () => {
  let service: ListarOrcamentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarOrcamentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
