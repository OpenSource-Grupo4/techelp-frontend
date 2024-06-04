import { TestBed } from '@angular/core/testing';

import { TecnhicalService } from './tecnhical.service';

describe('TecnhicalService', () => {
  let service: TecnhicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecnhicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
