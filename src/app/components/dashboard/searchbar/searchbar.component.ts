import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() toggleMenuChange = new EventEmitter<boolean>();


  constructor(private router: Router ) {}

  toggleM(){
    this.toggleMenu = !this.toggleMenu;
    this.toggleMenuChange.emit(this.toggleMenu);
  }

 
  ngOnInit() {
 
    let abc = localStorage.getItem("user")!
    let efg = JSON.parse(abc)

    this.userInfo = efg

  }

 

}
