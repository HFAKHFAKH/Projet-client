import { TestBed } from '@angular/core/testing';

import { AffichehelloService } from './affichehello.service';

describe('AffichehelloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffichehelloService = TestBed.get(AffichehelloService);
    expect(service).toBeTruthy();
  });
});
