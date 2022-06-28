import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActivitySignUp } from '../models/activities-sign-up/activity-sign-up';

@Injectable({
  providedIn: 'root',
})
export class ActivitySignUpService {
  private baseUrl: string = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  create(activitySignUp: ActivitySignUp): Observable<number> {
    return this._http.post<number>(
      `${this.baseUrl}/activities/${activitySignUp.activityId}/activity-sign-ups`,
      activitySignUp
    );
  }
}
