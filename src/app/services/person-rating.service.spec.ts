import { TestBed, inject } from '@angular/core/testing';

import { PersonRatingService } from './person-rating.service';

describe('PersonRatingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonRatingService]
    });
  });

  it('should be created', inject([PersonRatingService], (service: PersonRatingService) => {
    expect(service).toBeTruthy();
  }));
});
