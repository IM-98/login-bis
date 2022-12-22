import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IResponse from 'src/app/models/AuthModel';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  userInfo! : IResponse

  @Input() placeholder: string = ""
  @Input() withMargin: boolean = false
  @Input() withProfile: boolean = false
  @Input() toggleMenu: boolean = false

  constructor(private router: Router) {}

  toggleM(){
    this.toggleMenu = !this.toggleMenu
  }

  logOut(){
    localStorage.clear()
    this.router.navigate(["/"])

  }

  ngOnInit() {
 
    let abc = localStorage.getItem("user")!
    let efg = JSON.parse(abc)

    this.userInfo = efg

   

  }

 

}
