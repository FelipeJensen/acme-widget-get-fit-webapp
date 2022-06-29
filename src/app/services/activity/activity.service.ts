import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ActivityDate } from 'src/app/models/activities/activity-date';
import { Lookup } from 'src/app/models/lookup';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private baseUrl: string = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  getActivitiesLookup(): Observable<Lookup[]> {
    return this._http
      .get<Lookup[]>(`${this.baseUrl}/activities/lookup`)
      .pipe(map((r) => r.map((p) => new Lookup(p.id, p.value))));
  }

  getActivityDatesLookup(activityId: number): Observable<ActivityDate[]> {
    return this._http
      .get<ActivityDate[]>(
        `${this.baseUrl}/activities/${activityId}/dates/lookup`
      )
      .pipe(
        map((r) =>
          r.map(
            (s) => new ActivityDate(s.id, s.startDate, s.frequency, s.endDate)
          )
        )
      );
  }
}
