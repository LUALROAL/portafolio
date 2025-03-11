import { TestBed } from '@angular/core/testing';

import { MatrixSliderService } from './matrix-slider.service';

describe('MatrixSliderService', () => {
  let service: MatrixSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatrixSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
