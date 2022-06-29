import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivitySignUpFiltered } from 'src/app/services/dtos/queries/activity-sign-up-filtered';

@Component({
  selector: 'app-activity-sign-up-detail-dialog',
  templateUrl: './activity-sign-up-detail-dialog.component.html',
  styleUrls: ['./activity-sign-up-detail-dialog.component.scss'],
})
export class ActivitySignUpDetailDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ActivitySignUpFiltered
  ) {}

  ngOnInit(): void {}
}
