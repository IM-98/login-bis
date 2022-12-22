import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import IResponse from '../models/AuthModel';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  ApiUrl: string = "https://dummyjson.com/auth/login"

  constructor(private http: HttpClient, private router: Router) { }

  Login(signinForm: FormGroup) {

    this.http.post<IResponse>(this.ApiUrl, signinForm.value).subscribe(
      (res) => {
        localStorage.setItem('user', JSON.stringify(res))
        this.router.navigate(['/', 'dashboard'])
      }
    )
  }


}

