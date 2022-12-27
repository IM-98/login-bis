import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: AuthService){}


  canActivate(): boolean {
    if(this.userService.isLoggedIn) return true
    else {
      this.router.navigate(["/"])
      return false
    }
  }
  
}
