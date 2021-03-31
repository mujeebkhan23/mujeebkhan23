import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseInvoicesComponent } from './case-invoices.component';

describe('CaseInvoicesComponent', () => {
  let component: CaseInvoicesComponent;
  let fixture: ComponentFixture<CaseInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
