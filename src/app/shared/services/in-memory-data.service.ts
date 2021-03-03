import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {
  Activity,
  ActivityCategory,
  ActivityLanguage,
  ActivitySubcategoryBeach,
  ActivitySubcategoryCulture,
} from '../models/activity/activity';
import { Profile, ProfileNationality } from '../models/profile/profile';
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
        userId: 2,
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
        userId: 2,
      },
    ];
    const myActivities: {id: number, activityId: number, userId: number}[] = [
      {
        id: 1,
        activityId: 1,
        userId: 1,
      },
      {
        id: 2,
        activityId: 2,
        userId: 2,
      },
    ];
    const users: User[] = [
      {
        id: 1,
        // firstName: 'anibal',
        // lastName: 'santos',
        type: UserType.TOURIST,
        email: 'a@a.es',
        password: 'asg',
      },
      {
        id: 2,
        // firstName: 'anibal',
        // lastName: 'santos',
        type: UserType.COMPANY,
        email: 'b@b.es',
        password: 'asg',
      },
    ];
    const profiles: Profile[] = [
      {
        id: 1,
        firstName: 'anibal',
        lastName: 'santos',
        birthday: new Date(1989, 2, 7),
        phone: '645227483',
        nationality: ProfileNationality.ES,
        nif: '70873352W',
        about: 'Soy Anibal Santos, un turista',
      },
    ];
    return { activities, users, profiles, myActivities };
  }
}
