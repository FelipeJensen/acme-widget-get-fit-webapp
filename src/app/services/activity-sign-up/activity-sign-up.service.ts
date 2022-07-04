import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivitySignUp } from 'src/app/models/activities-sign-up/activity-sign-up';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { ActivityFiltered } from '../dtos/queries/activity-filtered';
import { ActivityDateFiltered } from '../dtos/queries/activity-date-filtered';

@Injectable({
  providedIn: 'root',
})
export class ActivitySignUpService {
  private baseUrl: string = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  getFiltered(
    name: string | undefined,
    activityId: number | undefined,
    activityDateId: number | undefined
  ): Observable<ActivityFiltered[]> {
    const url = new URL(`${this.baseUrl}/activity-sign-ups`);

    if (name) {
      url.searchParams.append('name', name);
    }

    if (activityId) {
      url.searchParams.append('activityId', activityId.toString());
    }

    if (activityDateId) {
      url.searchParams.append('activityDateId', activityDateId.toString());
    }

    return this._http.get<ActivityFiltered[]>(url.toString()).pipe(
      map((r) =>
        r.map(
          (s) =>
            <ActivityFiltered>{
              id: s.id,
              name: s.name,
              activityDates: s.activityDates.map(
                (d) =>
                  new ActivityDateFiltered(
                    d.id,
                    d.startDate,
                    d.frequency,
                    d.activitySignUps,
                    d.endDate
                  )
              ),
            }
        )
      )
    );
  }

  create(activitySignUp: ActivitySignUp): Observable<number> {
    return this._http.post<number>(
      `${this.baseUrl}/activities/${activitySignUp.activityId}/activity-sign-ups`,
      activitySignUp
    );
  }
}
