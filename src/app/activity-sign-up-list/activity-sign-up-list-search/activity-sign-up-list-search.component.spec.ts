import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySignUpListSearchComponent } from './activity-sign-up-list-search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

describe('ActivitySignUpListSearchComponent', () => {
  let component: ActivitySignUpListSearchComponent;
  let fixture: ComponentFixture<ActivitySignUpListSearchComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: {} },
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivitySignUpListSearchComponent],
      imports: [HttpClientTestingModule, MatDialogModule, RouterTestingModule],
    }).compileComponents();
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
