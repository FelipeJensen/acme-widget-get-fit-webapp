import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySignUpComponent } from './activity-sign-up.component';

describe('ActivitySignUpComponent', () => {
  let component: ActivitySignUpComponent;
  let fixture: ComponentFixture<ActivitySignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitySignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
