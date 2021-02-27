import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {
  Activity,
  ActivityCategory,
  ActivityLanguage,
  ActivitySubcategoryBeach,
  ActivitySubcategoryCulture,
} from '../models/activity/activity';
import { User, UserType } from '../models/user/user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const activities: Activity[] = [
      {
        id: 1,
        name: 'Surfing',
        category: ActivityCategory.BEACH,
        subcategory: ActivitySubcategoryBeach.ACTIVITY,
        description:
          'Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
        language: ActivityLanguage.EN,
        price: 20,
        date: new Date(2020, 11, 28),
        peopleRegistered: 1,
      },
      {
        id: 2,
        name: 'Snorkel',
        category: ActivityCategory.BEACH,
        subcategory: ActivitySubcategoryBeach.ACTIVITY,
        description:
          'Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
        language: ActivityLanguage.EN,
        price: 20,
        date: new Date(2020, 11, 28),
        peopleRegistered: 5,
      },
    ];
    const users: User[] = [
      {
        id: 1,
        firstName: 'anibal',
        lastName: 'santos',
        type: UserType.TOURIST,
        email: 'a@a.es',
        password: 'asg',
      },
      {
        id: 2,
        firstName: 'anibal',
        lastName: 'santos',
        type: UserType.COMPANY,
        email: 'b@b.es',
        password: 'asg',
      },
    ];
    return { activities, users };
  }
}
