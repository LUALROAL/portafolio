import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMatrixBackgroundComponent } from './app-matrix-background.component';

describe('AppMatrixBackgroundComponent', () => {
  let component: AppMatrixBackgroundComponent;
  let fixture: ComponentFixture<AppMatrixBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMatrixBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMatrixBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
