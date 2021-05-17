import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnatureComponent } from './viewnature.component';

describe('ViewnatureComponent', () => {
  let component: ViewnatureComponent;
  let fixture: ComponentFixture<ViewnatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewnatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
