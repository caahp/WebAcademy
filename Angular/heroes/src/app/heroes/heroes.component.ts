import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [] // initalized to an empty array
  selectedHero?: Hero;

  constructor(private heroService: HeroService,
    private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroesMock().subscribe(heroes => this.heroes = heroes);
  }

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
