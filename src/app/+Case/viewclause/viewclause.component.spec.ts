import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewclauseComponent } from './viewclause.component';

describe('ViewclauseComponent', () => {
  let component: ViewclauseComponent;
  let fixture: ComponentFixture<ViewclauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewclauseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewclauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
