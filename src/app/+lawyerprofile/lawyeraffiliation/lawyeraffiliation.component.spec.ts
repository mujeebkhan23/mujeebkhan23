import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyeraffiliationComponent } from './lawyeraffiliation.component';

describe('LawyeraffiliationComponent', () => {
  let component: LawyeraffiliationComponent;
  let fixture: ComponentFixture<LawyeraffiliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyeraffiliationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyeraffiliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
