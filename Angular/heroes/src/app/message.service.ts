import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  messages: string[] = []; //initializes empty array

  add(message:string){
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
