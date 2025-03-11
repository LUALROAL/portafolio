import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosellComponent } from './carrosell.component';

describe('CarrosellComponent', () => {
  let component: CarrosellComponent;
  let fixture: ComponentFixture<CarrosellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrosellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
