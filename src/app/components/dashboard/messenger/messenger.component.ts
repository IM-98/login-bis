import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Message, { MessageAPI } from 'src/app/models/MessageModel';


@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {

  messages: Message[] = Message
  messagesAPI!: MessageAPI
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<MessageAPI>("https://dummyjson.com/comments?limit=8").subscribe(
      res =>{
        this.messagesAPI = res
      }
    )
  }


}
