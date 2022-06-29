import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySignUpDetailDialogComponent } from './activity-sign-up-detail-dialog.component';

describe('ActivitySignUpDetailDialogComponent', () => {
  let component: ActivitySignUpDetailDialogComponent;
  let fixture: ComponentFixture<ActivitySignUpDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitySignUpDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySignUpDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
