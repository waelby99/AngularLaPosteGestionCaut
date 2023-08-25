import { TestBed } from '@angular/core/testing';

import { OrdonnateurService } from './ordonnateur.service';

describe('OrdonnateurService', () => {
  let service: OrdonnateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdonnateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
