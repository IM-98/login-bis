import { Component } from '@angular/core';
import Message from 'src/app/models/MessageModel';


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


