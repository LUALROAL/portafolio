import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixSliderComponent } from './matrix-slider.component';

describe('MatrixSliderComponent', () => {
  let component: MatrixSliderComponent;
  let fixture: ComponentFixture<MatrixSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrixSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrixSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
