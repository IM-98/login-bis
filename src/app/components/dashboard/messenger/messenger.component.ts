import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, startWith, Subject, switchMap } from 'rxjs';
import Message, { MessageType } from 'src/app/models/MessageModel';
import { AuthService } from 'src/app/services/Auth.service';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {

  searchNames = new Subject<string>();
  messageList$!: Observable<Message[]>;

  messages: Message[] = Message;
  messagesList!: Array<MessageType>;
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getMessages((messagesList) => {
      this.messagesList = messagesList;
      console.log(this.messagesList);
    });

    this.messageList$ = this.searchNames.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((char) => this.messageService.searchMessage(char)),
      startWith(this.messages)
    );
  }

  search(name: string) {
    this.searchNames.next(name.toLowerCase());
  }

}

