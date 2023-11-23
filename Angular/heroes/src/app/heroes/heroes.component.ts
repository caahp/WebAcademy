import { Component } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Spider Man',
    power: 88,
    img: 'https://t2.tudocdn.net/634803?w=1200&h=1200'
  };
}
