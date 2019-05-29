import { TestBed } from '@angular/core/testing';

import { SteamService } from './steam.service';

describe('SteamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SteamService = TestBed.get(SteamService);
    expect(service).toBeTruthy();
  });
});
