import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home-service/home.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  alunos = [];

  constructor(private service: HomeService) { }

  ngOnInit(): void {
   this.service.getAlunos().subscribe((data) => {
    this.alunos = data.alunos;
    console.log(this.alunos)
   });
  }

  insertAlunos(){
    const data = {
      nome: 'Lucas',
      idade: 25
    }
    return this.service.insertAlunos(data).subscribe((data) =>
    {
      return console.log(data)
    })
  }

}
