import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityDate } from 'src/app/models/activities/activity-date';
import { Lookup } from 'src/app/models/lookup';
import { ActivitySignUpService } from 'src/app/services/activity-sign-up/activity-sign-up.service';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { ActivityFiltered } from 'src/app/services/dtos/queries/activity-filtered';

@Component({
  selector: 'app-activity-sign-up-list-search',
  templateUrl: './activity-sign-up-list-search.component.html',
  styleUrls: ['./activity-sign-up-list-search.component.scss'],
})
export class ActivitySignUpListSearchComponent
  implements OnInit, AfterViewInit
{
  @Output() searchResultsEvent: EventEmitter<ActivityFiltered[]> =
    new EventEmitter<ActivityFiltered[]>();

  searchForm = new FormGroup({
    name: new FormControl(),
    activityId: new FormControl(),
    activityDateId: new FormControl({ value: null, disabled: true }),
  });

  activities: Lookup[] = [];
  activityDates: ActivityDate[] = [];
  activityDatesDisabled: boolean = true;

  @ViewChild(MatAccordion) expansionPanel!: MatAccordion;

  constructor(
    private _activityService: ActivityService,
    private _activitySignUpService: ActivitySignUpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.queryParams.subscribe((params) => {
      const name: string = params['name'];
      const activityId: number = params['activityId'];
      const activityDateId: number = params['activityDateId'];

      if (name) {
        this.searchForm.controls['name'].setValue(name);
      }

      if (activityId) {
        this.searchForm.controls['activityId'].setValue(Number(activityId));
      }

      if (activityDateId) {
        this.searchForm.controls['activityDateId'].setValue(
          Number(activityDateId)
        );
      }

      if (activityId) {
        this.activitySelected();
      }
    });

    this._activityService.getActivitiesLookup().subscribe((lookups) => {
      this.activities = lookups;
    });

    this.searchForm.controls['activityId'].valueChanges.subscribe((_) => {
      this.activitySelected();
    });
  }

  ngAfterViewInit(): void {
    this.onSubmit();
  }

  activitySelected(): void {
    this.searchForm.controls['activityDateId'].disable();

    const activityId = this.searchForm.controls['activityId'].value;

    if (activityId) {
      this._activityService
        .getActivityDatesLookup(activityId)
        .subscribe((lookups) => {
          this.activityDates = lookups;
          this.searchForm.controls['activityDateId'].enable();
        });
    }
  }

  clear() {
    this.searchForm.reset();
    this.clearQueryParams();
  }

  onSubmit() {
    const formValue = this.searchForm.value;

    this.setQueryParams(formValue);

    this._activitySignUpService
      .getFiltered(
        formValue.name,
        formValue.activityId,
        formValue.activityDateId
      )
      .subscribe((activitySignUps) => {
        this.searchResultsEvent.emit(activitySignUps);
        this.expansionPanel.closeAll();
      });
  }

  private setQueryParams(queryParams: any) {
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });
  }

  private clearQueryParams() {
    this._router.navigate([], {
      relativeTo: this._route,
      queryParamsHandling: '',
    });
  }
}
