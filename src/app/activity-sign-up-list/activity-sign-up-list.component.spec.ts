import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySignUpListComponent } from './activity-sign-up-list.component';

describe('ActivitySignUpListComponent', () => {
  let component: ActivitySignUpListComponent;
  let fixture: ComponentFixture<ActivitySignUpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitySignUpListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySignUpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
