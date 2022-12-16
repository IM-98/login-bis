import { Component, OnInit } from '@angular/core';
import Message from '../message';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {
  messages: Message[] = Message

  ngOnInit(){
    
  }
}
