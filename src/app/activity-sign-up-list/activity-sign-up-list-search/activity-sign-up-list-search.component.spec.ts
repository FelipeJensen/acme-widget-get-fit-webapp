import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySignUpListSearchComponent } from './activity-sign-up-list-search.component';

describe('ActivitySignUpListSearchComponent', () => {
  let component: ActivitySignUpListSearchComponent;
  let fixture: ComponentFixture<ActivitySignUpListSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitySignUpListSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySignUpListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
