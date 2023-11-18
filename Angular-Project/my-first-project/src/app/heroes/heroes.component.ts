import { Component } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'] 
})

export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Spider Man',
    img: 'https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/5ayReKkz8RaBVuTvrxgA3rvh.png'
  };
}
