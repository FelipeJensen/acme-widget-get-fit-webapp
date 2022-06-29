import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { ActivitySignUp } from '../models/activities-sign-up/activity-sign-up';
import { ActivityDate } from '../models/activities/activity-date';
import { Lookup } from '../models/lookup';
import { ActivitySignUpService } from '../services/activity-sign-up/activity-sign-up.service';
import { ActivityService } from '../services/activity/activity.service';
import { SnackBarService } from '../services/snack-bar/snack-bar.service';

@Component({
  selector: 'app-activity-sign-up',
  templateUrl: './activity-sign-up.component.html',
  styleUrls: ['./activity-sign-up.component.scss'],
})
export class ActivitySignUpComponent implements OnInit {
  activities: Lookup[] = [];
  activityDates: ActivityDate[] = [];
  activityDatesDisabled: boolean = true;
  saving: boolean = false;

  apiError: any;

  activitySignUpForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    activityId: new FormControl(null, Validators.required),
    activityDateId: new FormControl(null, Validators.required),
    yearsOfExperienceInActivity: new FormControl(null),
    comments: new FormControl(null),
  });

  constructor(
    private _activityService: ActivityService,
    private _activitySignUpService: ActivitySignUpService,
    private _snackBarService: SnackBarService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activityService.getActivitiesLookup().subscribe((lookups) => {
      this.activities = lookups;
    });
  }

  activitySelected(activityId: number): void {
    this.activityDatesDisabled = true;

    this._activityService
      .getActivityDatesLookup(activityId)
      .subscribe((lookups) => {
        this.activityDates = lookups;
        this.activityDatesDisabled = false;
      });

    this.activitySignUpForm.controls['activityId'].setValue(activityId);
  }

  activityDateSelected(activityDateId: number): void {
    this.activitySignUpForm.controls['activityDateId'].setValue(activityDateId);
  }

  onSubmit() {
    this.apiError = null;
    this._snackBarService.open('Saving...');

    this.saving = true;

    const activitySignUp: ActivitySignUp = this.activitySignUpForm.value;

    this._activitySignUpService
      .create(activitySignUp)
      .pipe(finalize(() => (this.saving = false)))
      .subscribe({
        next: (_) => {
          this._snackBarService.open('Signed Up!', true);
          this._router.navigate(['activity-sign-ups'], {
            queryParams: { activityId: activitySignUp.activityId },
            queryParamsHandling: 'merge',
          });
        },
        error: (e) => {
          this.apiError = e.error;
          this._snackBarService.open('Failed to save.', true);
        },
      });
  }
}
