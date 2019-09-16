import { TestBed } from '@angular/core/testing';

import { CbasicService } from './cbasic.service';

describe('CbasicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CbasicService = TestBed.get(CbasicService);
    expect(service).toBeTruthy();
  });
});
