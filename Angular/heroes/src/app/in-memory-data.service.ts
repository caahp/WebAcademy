import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { Hero } from '../app/Hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [ // object array
      { id: 1, name: 'Spider Man'},
      { id: 2, name: 'Iron Man'},
      { id: 3, name: 'Hulk'},
      { id: 4, name: 'Thor'},
      { id: 5, name: 'Black Widow'},
      { id: 6, name: 'Captain America'},
      { id: 7, name: 'Hawkeye'},
      { id: 8, name: 'Doctor Strange'},
      { id: 9, name: 'Black Panther'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 0; // ... => desestruturação; ? => ternário
  }

}
