import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import IResponse from '../../models/AuthModel';
import { AuthService } from 'src/app/services/Auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

token!: string
userName!: string
userImgUrl!: string

  

goPlaces() {
  this.userinfo.Login(this.signinForm)
}
  signinForm!: FormGroup

  signinControl = new FormControl('', {updateOn: 'blur'})


  constructor(private formbuilder: FormBuilder, private userinfo: AuthService) { }
    get username() {
      return this.signinForm.get('email');
    }
  
    get password() {
      return this.signinForm.get('password');
    }
  


  
  ngOnInit(): void {

    this.signinForm = this.formbuilder.group({
      username: ['', [
        Validators.required,
        Validators.pattern("")
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern("")
      ]]
    })
  }

}
