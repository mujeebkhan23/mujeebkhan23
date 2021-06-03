import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerlicenseComponent } from './lawyerlicense.component';

describe('LawyerlicenseComponent', () => {
  let component: LawyerlicenseComponent;
  let fixture: ComponentFixture<LawyerlicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerlicenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerlicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
