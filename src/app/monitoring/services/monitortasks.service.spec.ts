import { TestBed } from '@angular/core/testing';

import { MonitortasksService } from './monitortasks.service';

describe('MonitortasksService', () => {
  let service: MonitortasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitortasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
