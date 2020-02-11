import { TestBed } from '@angular/core/testing';

import { MonstreService } from './monstre.service';

describe('MonstreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonstreService = TestBed.get(MonstreService);
    expect(service).toBeTruthy();
  });
});
