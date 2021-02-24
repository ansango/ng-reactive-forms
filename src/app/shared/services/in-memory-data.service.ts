import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const activities = [
      {
        id: 1,
        name: 'Football',
        category: 'Sports',
        subcategory: 'Sport Team',
        language: ['es', 'it', 'en'],
        price: 20,
        date: '2020',
        actions: ['', ''],
      },
      {
        id: 2,
        name: 'Basketball',
        category: 'Sports',
        subcategory: 'Sport Team',
        language: ['es', 'it', 'en'],
        price: 20,
        date: '2020',
        actions: ['', ''],
      },
      {
        id: 3,
        name: 'Baseball',
        category: 'Sports',
        subcategory: 'Sport Team',
        language: ['es', 'it', 'en'],
        price: 20,
        date: '2020',
        actions: ['', ''],
      },
    ];
    const users = [
      {
        firstName: 'anibal',
        lastName: 'santos',
        type: 'tourist',
        email: 'a@a.es',
        password: 'asg',
        token: '',
      },
    ];
    return { activities, users };
  }
}
