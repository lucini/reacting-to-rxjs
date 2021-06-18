import { TestBed } from '@angular/core/testing';

import { GuerraDosTronosService } from './guerra-dos-tronos.service';

describe('GuerraDosTronosService', () => {
  let service: GuerraDosTronosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuerraDosTronosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
