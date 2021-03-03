import { TestBed } from '@angular/core/testing';

import { MyActivitiesService } from './my-activities.service';

describe('MyActivitiesService', () => {
  let service: MyActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
