import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { InputComponent } from './input/input.component';
import { SubmitbtnComponent } from './submitbtn/submitbtn.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordComponent } from './password/password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessengerComponent } from './messenger/messenger.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChatinfoComponent } from './chatinfo/chatinfo.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { ChatbarComponent } from './chatbar/chatbar.component';
import { MessageItemComponent } from './message-item/message-item.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    InputComponent,
    SubmitbtnComponent,
    SignupComponent,
    PasswordComponent,
    DashboardComponent,
    MessengerComponent,
    SearchbarComponent,
    SidebarComponent,
    ChatinfoComponent,
    ChatboxComponent,
    ChatbarComponent,
    MessageItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
