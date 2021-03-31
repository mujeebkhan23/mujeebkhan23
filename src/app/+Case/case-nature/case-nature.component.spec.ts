import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseNatureComponent } from './case-nature.component';

describe('CaseNatureComponent', () => {
  let component: CaseNatureComponent;
  let fixture: ComponentFixture<CaseNatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseNatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
