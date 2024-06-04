import { TestBed } from '@angular/core/testing';

import { MyprofileApiService } from './myprofile-api.service';

describe('MyprofileApiService', () => {
  let service: MyprofileApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyprofileApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
