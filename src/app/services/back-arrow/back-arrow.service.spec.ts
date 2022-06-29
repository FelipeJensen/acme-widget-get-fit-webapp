import { TestBed } from '@angular/core/testing';

import { BackArrowService } from './back-arrow.service';

describe('BackArrowService', () => {
  let service: BackArrowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackArrowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
