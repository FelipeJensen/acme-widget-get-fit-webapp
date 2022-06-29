import { TestBed } from '@angular/core/testing';

import { ActivitySignUpService } from './activity-sign-up.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ActivitySignUpService', () => {
  let service: ActivitySignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ActivitySignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
