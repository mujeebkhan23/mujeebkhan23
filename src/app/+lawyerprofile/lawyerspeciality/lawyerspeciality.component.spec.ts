import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerspecialityComponent } from './lawyerspeciality.component';

describe('LawyerspecialityComponent', () => {
  let component: LawyerspecialityComponent;
  let fixture: ComponentFixture<LawyerspecialityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerspecialityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerspecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
