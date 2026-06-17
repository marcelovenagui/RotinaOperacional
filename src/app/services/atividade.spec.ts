import { TestBed } from '@angular/core/testing';

import { Atividade } from './atividade';

describe('Atividade', () => {
  let service: Atividade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Atividade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
