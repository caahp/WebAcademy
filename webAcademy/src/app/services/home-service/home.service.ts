import { Injectable } from '@angular/core';
import axios from 'axios'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private api: string = 'http://localhost:3000/alunos'

  constructor() { }

  getAlunos() : Observable<any>{
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    }
    return new Observable((observer) =>{
      axios.get(this.api, {headers}).then((response) =>{
        observer.next(response.data)
        observer.complete()
      })
      .catch((error) =>{
        observer.error(error)
      })
    })
  }
}


