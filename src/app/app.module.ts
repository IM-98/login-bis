import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { InputComponent } from './input/input.component';
import { SubmitbtnComponent } from './submitbtn/submitbtn.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    InputComponent,
    SubmitbtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
