import { Component } from '@angular/core';
import { AppModule } from './app.module';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-first-project';
  helloWorld = {
    message: 'Hello World'
  }
}
