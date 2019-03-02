import { TestBed } from '@angular/core/testing';

import { MoviesAuthService } from './movies-auth.service';

describe('MoviesAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesAuthService = TestBed.get(MoviesAuthService);
    expect(service).toBeTruthy();
  });
});
