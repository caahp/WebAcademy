import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [] // initalized to an empty array
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }
}
