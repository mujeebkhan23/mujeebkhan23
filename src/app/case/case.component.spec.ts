import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseComponent } from './case.component';


<<<<<<< HEAD:src/app/case/case.component.spec.ts

describe('CalendarComponent', () => {
  let component: CaseComponent;
  let fixture: ComponentFixture<CaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseComponent ]
=======
import { EditFormComponent } from './edit.component';

describe('EditFormComponent', () => {
  let component: EditFormComponent;
  let fixture: ComponentFixture<EditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormComponent ]
>>>>>>> a3a63bd4b26efc2f421b019acea729a7f239f1a7:src/app/+clientprofile/edit/edit.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD:src/app/case/case.component.spec.ts
    fixture = TestBed.createComponent(CaseComponent);
=======
    fixture = TestBed.createComponent(EditFormComponent);
>>>>>>> a3a63bd4b26efc2f421b019acea729a7f239f1a7:src/app/+clientprofile/edit/edit.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
