import { Component, OnInit } from '@angular/core';
import Message from '../message';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent {
  
    messages: Message[] = Message



}
