import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home-service/home.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  constructor(private service: HomeService) { }

  ngOnInit(): void {
   this.service.getAlunos().subscribe((data) => {
      console.log(data)
   });

  }


}
