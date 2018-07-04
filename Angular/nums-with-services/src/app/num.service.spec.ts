import { TestBed, inject } from '@angular/core/testing';

import { NumService } from './num.service';

describe('NumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumService]
    });
  });

  it('should be created', inject([NumService], (service: NumService) => {
    expect(service).toBeTruthy();
  }));
});
