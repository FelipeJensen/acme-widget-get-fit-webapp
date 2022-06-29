import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BackArrowService } from '../services/back-arrow/back-arrow.service';
import { ActivityFiltered } from '../services/dtos/queries/activity-filtered';
import { ActivitySignUpFiltered } from '../services/dtos/queries/activity-sign-up-filtered';
import { ActivitySignUpDetailDialogComponent } from './activity-sign-up-detail-dialog/activity-sign-up-detail-dialog.component';

@Component({
  selector: 'app-activity-sign-up-list',
  templateUrl: './activity-sign-up-list.component.html',
  styleUrls: ['./activity-sign-up-list.component.scss'],
})
export class ActivitySignUpListComponent implements OnInit {
  activitiesFiltered: ActivityFiltered[] = [];

  constructor(private _dialog: MatDialog) {}

  ngOnInit(): void {}

  receiveSearchResults(activitySignUpFiltered: ActivityFiltered[]) {
    this.activitiesFiltered.splice(0, this.activitiesFiltered.length);
    this.activitiesFiltered.push(...activitySignUpFiltered);
  }

  showDetails(signUp: ActivitySignUpFiltered) {
    this._dialog.open(ActivitySignUpDetailDialogComponent, {
      data: signUp,
    });
  }
}
