import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Message, { MessageAPI } from 'src/app/models/MessageModel';


@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {
  messages: Message[] = Message
  messagesAPI!: MessageAPI
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<MessageAPI>("https://dummyjson.com/comments?limit=8").subscribe(
      res => {
        this.messagesAPI = res
      }
    )
  }
}