import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentPartiesComponent } from './opponent-parties.component';

describe('OpponentPartiesComponent', () => {
  let component: OpponentPartiesComponent;
  let fixture: ComponentFixture<OpponentPartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpponentPartiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpponentPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
