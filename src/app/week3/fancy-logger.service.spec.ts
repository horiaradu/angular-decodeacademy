import { TestBed, inject } from '@angular/core/testing';

import { FancyLoggerService } from './fancy-logger.service';

describe('FancyLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FancyLoggerService]
    });
  });

  it('should be created', inject([FancyLoggerService], (service: FancyLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
