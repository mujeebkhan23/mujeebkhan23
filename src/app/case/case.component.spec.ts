import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseComponent } from './case.component';


<<<<<<< HEAD:src/app/calendar/calendars.component.spec.ts
import { CalendarsComponent } from './calendars.component';

describe('CalendarComponent', () => {
  let component: CalendarsComponent;
  let fixture: ComponentFixture<CalendarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarsComponent);
=======

describe('CalendarComponent', () => {
  let component: CaseComponent;
  let fixture: ComponentFixture<CaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseComponent);
>>>>>>> 9bfb5677bc4f99bb9ca9e7b172b47356f4954d2a:src/app/case/case.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
