import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseScheduleComponent } from './case-schedule.component';

describe('CaseScheduleComponent', () => {
  let component: CaseScheduleComponent;
  let fixture: ComponentFixture<CaseScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
