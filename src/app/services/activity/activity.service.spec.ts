import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivityDate } from 'src/app/models/activities/activity-date';
import { ActivityFrequency } from 'src/app/models/activities/activity-frequency';
import { Lookup } from 'src/app/models/lookup';
import { environment } from 'src/environments/environment';
import { ActivityService } from './activity.service';

describe('ActivityService', () => {
  let service: ActivityService;
  let controller: HttpTestingController;
  let baseUrl: string = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ActivityService],
    });

    service = TestBed.inject(ActivityService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getActivitiesLookup should call for lookups', () => {
    const expected: Lookup[] = [new Lookup(1, '1')];

    service.getActivitiesLookup().subscribe((actuals) => {
      expect(actuals).toEqual(expected);
    });

    const request = controller.expectOne(`${baseUrl}/activities/lookup`);

    request.flush(expected);

    controller.verify();
  });

  it('getActivityDatesLookup should call for ActivityDates', () => {
    const activityId = 1;

    const expected: ActivityDate[] = [
      new ActivityDate(1, new Date(), ActivityFrequency.Daily, null),
    ];

    service.getActivityDatesLookup(activityId).subscribe((actuals) => {
      expect(actuals).toEqual(expected);
    });

    const request = controller.expectOne(
      `${baseUrl}/activities/${activityId}/dates/lookup`
    );

    request.flush(expected);

    controller.verify();
  });
});
