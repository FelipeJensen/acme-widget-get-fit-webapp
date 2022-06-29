import { Component, Input, OnInit } from '@angular/core';

interface ApiError {
  errors: { [name: string]: string[] };
  status: number;
  title: string;
  traceId: string;
  type: string;
}

@Component({
  selector: 'app-api-errors',
  templateUrl: './api-errors.component.html',
  styleUrls: ['./api-errors.component.scss'],
})
export class ApiErrorsComponent implements OnInit {
  @Input() set apiError(value: ApiError) {
    if (value) {
      this.apiErrors.splice(0, this.apiErrors.length);
      Object.keys(value.errors).map((k) => {
        this.apiErrors.push(...value.errors[k]);
      });
    }
  }

  apiErrors: string[] = [];

  ngOnInit(): void {}
}
