import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserLogin } from '../models/user/userLogin';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { email: 'anibalsago@iberdrola.es', password: 'Dr Nice' },
      { email: 'anibalsantosgo@gmail.com', password: 'Narco' },
      { email: 'janecarla@iber.es', password: 'Bombasto' },
      { email: 'carlajane@drola.es', password: 'Celeritas' },
      { email: 'doejohn@yahoo.es', password: 'Magneta' },
      { email: 'johndoe@iberdrola.es', password: 'RubberMan' },
    ];
    return { users };
  }
}
