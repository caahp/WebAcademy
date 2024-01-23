import { Injectable } from '@angular/core';
import axios from 'axios'
import { Observable } from 'rxjs';
import { Alunos } from '../../interfaces/alunos-interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private api: string = 'http://localhost:3000'

  constructor() { }

  getAlunos() : Observable<any>{
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
    return new Observable((observer) =>{
      axios.get(this.api + "/alunos")
      .then((response) =>{
        observer.next(response.data)
      })
      .catch((error) =>{
        observer.error(error)
      })
    })
  }

  insertAlunos(data: Alunos): Observable<any>{  // Posso colocar Observable<Alunos> para validar os tipos de dados
    return new Observable((observer) =>{
      axios.post(this.api + "/alunos", data)
      .then((response) =>{
        observer.next(response.data)
        observer.complete()
      })
      .catch((error) =>{
        observer.error(error)
      })
    })
  }

}


