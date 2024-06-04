import { TestBed } from '@angular/core/testing';

import { TechnicalsServiceService } from './technicals-service.service';

describe('TecnicalsServiceService', () => {
  let service: TechnicalsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicalsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
