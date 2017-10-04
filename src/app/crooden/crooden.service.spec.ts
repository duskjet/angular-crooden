import { TestBed, inject } from '@angular/core/testing';

import { CroodenService } from './crooden.service';

describe('CroodenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CroodenService]
    });
  });

  it('should be created', inject([CroodenService], (service: CroodenService) => {
    expect(service).toBeTruthy();
  }));
});
