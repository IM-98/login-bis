import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Message, {  MessageAPI, MessageType } from '../models/MessageModel';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) {}

  messageList = Message;
  messageResult: Message[] = []; 

  getMessages(callback: (messagesList: Array<MessageType>) => void) {
    this.http.get<MessageAPI>("https://dummyjson.com/comments?limit=8").subscribe(
      (res) => {
        console.log(res);
        console.log(res.comments);
        callback(res.comments);
      }
    );
  }

  searchMessage(char: string): Observable<Message[]> {
    return new Observable((observer) => {
      this.messageResult = this.messageList.filter((message) => message.name.toLowerCase().includes(char))
      observer.next(this.messageResult);
      observer.complete();
    });
  }
}
