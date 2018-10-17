import { TestBed, inject } from '@angular/core/testing';

import { CheckUserLoginService } from './check-user-login.service';

describe('CheckUserLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckUserLoginService]
    });
  });

  it('should be created', inject([CheckUserLoginService], (service: CheckUserLoginService) => {
    expect(service).toBeTruthy();
  }));
});
