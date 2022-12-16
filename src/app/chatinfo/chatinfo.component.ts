import { Component } from '@angular/core';
import Message from '../message';

@Component({
  selector: 'app-chatinfo',
  templateUrl: './chatinfo.component.html',
  styleUrls: ['./chatinfo.component.scss']
})
export class ChatinfoComponent {

  toggleFiles: boolean = false
  toggleMembers: boolean = false

  messages: Message[] = Message


  toggleF(){
    this.toggleFiles = !this.toggleFiles
    
  }
  toggleM(){
    this.toggleMembers = !this.toggleMembers
  }

  
}


