import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseclauseComponent } from './caseclause.component';

describe('CaseclauseComponent', () => {
  let component: CaseclauseComponent;
  let fixture: ComponentFixture<CaseclauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseclauseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseclauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
