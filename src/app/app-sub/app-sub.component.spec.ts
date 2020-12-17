import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSubComponent } from './app-sub.component';

describe('AppSubComponent', () => {
  let component: AppSubComponent;
  let fixture: ComponentFixture<AppSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
