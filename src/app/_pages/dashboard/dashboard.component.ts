import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: AuthService) { }
  toggleState! : boolean

  ngOnInit(): void {
    
  }

  handleToggleMenuChange(toggleMenu: boolean) {
    this.toggleState = toggleMenu;
  }
  

  logOut(){
    this.userService.logOut()
  }

}
