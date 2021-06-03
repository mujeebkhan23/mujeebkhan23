import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentLawyerComponent } from './opponent-lawyer.component';

describe('OpponentLawyerComponent', () => {
  let component: OpponentLawyerComponent;
  let fixture: ComponentFixture<OpponentLawyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpponentLawyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpponentLawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
