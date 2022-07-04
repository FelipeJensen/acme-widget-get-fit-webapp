import { TestBed } from '@angular/core/testing';

import { ActivitySignUpService } from './activity-sign-up.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ActivitySignUp } from 'src/app/models/activities-sign-up/activity-sign-up';

import { faker } from '@faker-js/faker';
import { environment } from 'src/environments/environment';
import { ActivityFiltered } from '../dtos/queries/activity-filtered';

describe('ActivitySignUpService', () => {
  let service: ActivitySignUpService;
  let controller: HttpTestingController;
  let baseUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ActivitySignUpService],
    });

    service = TestBed.inject(ActivitySignUpService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call create and return id', () => {
    const expected = 1;

    const activityId = faker.datatype.number();
    const activitySignUp: ActivitySignUp = new ActivitySignUp(
      faker.name.firstName(),
      faker.name.lastName(),
      faker.internet.email(),
      activityId,
      faker.datatype.number(),
      faker.datatype.number(),
      faker.random.words()
    );

    service.create(activitySignUp).subscribe((actual) => {
      expect(actual).toEqual(expected);
    });

    const request = controller.expectOne(
      `${baseUrl}/activities/${activityId}/activity-sign-ups`
    );

    request.flush(expected);

    controller.verify();
  });

  it('should send filter parameters', () => {
    const name = faker.name.firstName();
    const activityId = faker.datatype.number();
    const activityDateId = faker.datatype.number();

    service.getFiltered(name, activityId, activityDateId).subscribe();

    const url = new URL(`${baseUrl}/activity-sign-ups`);
    url.searchParams.append('name', name);
    url.searchParams.append('activityId', activityId.toString());
    url.searchParams.append('activityDateId', activityDateId.toString());

    controller.expectOne(url.toString());

    controller.verify();
  });

  it('should call for activity sign ups filtered', () => {
    const expected: ActivityFiltered[] = [
      {
        id: faker.datatype.number(),
        name: faker.name.firstName(),
        activityDates: [],
      },
    ];

    service.getFiltered('1', 1, 1).subscribe((actuals) => {
      expect(actuals).toEqual(expected);
    });

    const url = new URL(`${baseUrl}/activity-sign-ups`);
    url.searchParams.append('name', '1');
    url.searchParams.append('activityId', '1');
    url.searchParams.append('activityDateId', '1');

    const request = controller.expectOne(url.toString());

    request.flush(expected);

    controller.verify();
  });
});
