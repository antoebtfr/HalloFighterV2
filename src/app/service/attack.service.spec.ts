import { TestBed } from '@angular/core/testing';

import { AttackService } from './attack.service';

describe('AttackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttackService = TestBed.get(AttackService);
    expect(service).toBeTruthy();
  });
});
