import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInterpolationComponent } from './app-interpolation.component';

describe('AppInterpolationComponent', () => {
  let component: AppInterpolationComponent;
  let fixture: ComponentFixture<AppInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppInterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
