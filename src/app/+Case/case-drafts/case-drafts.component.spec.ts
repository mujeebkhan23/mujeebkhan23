import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDraftsComponent } from './case-drafts.component';

describe('CaseDraftsComponent', () => {
  let component: CaseDraftsComponent;
  let fixture: ComponentFixture<CaseDraftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseDraftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseDraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
