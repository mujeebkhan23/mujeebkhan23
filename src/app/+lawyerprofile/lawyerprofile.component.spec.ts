import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LawyerProfileComponent } from './lawyerprofile.component';



describe('RegisterComponent', () => {
  let component: LawyerProfileComponent;
  let fixture: ComponentFixture<LawyerProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyerProfileComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
