import { TestBed } from '@angular/core/testing';

import { ActivitySignUpService } from './activity-sign-up.service';

describe('ActivitySignUpService', () => {
  let service: ActivitySignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitySignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
