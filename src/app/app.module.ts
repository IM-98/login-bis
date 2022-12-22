import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './_pages/signin/signin.component';
import { InputComponent } from './components/forms/input/input.component';
import { SubmitbtnComponent } from './components/forms/submitbtn/submitbtn.component';
import { SignupComponent } from './_pages/signup/signup.component';
import { PasswordComponent } from './_pages/password/password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { SearchbarComponent } from './components/dashboard/searchbar/searchbar.component';

import { ChatbarComponent } from './components/dashboard/chatbar/chatbar.component';
import { MessageItemComponent } from './components/dashboard/message-item/message-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatinfoComponent } from './components/dashboard/chatinfo/chatinfo.component';
import { ChatboxComponent } from './components/dashboard/chatbox/chatbox.component';
import { MessengerComponent } from './components/dashboard/messenger/messenger.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';


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
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
