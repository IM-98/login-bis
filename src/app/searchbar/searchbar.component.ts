import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  @Input() placeholder : string = ""
  @Input() withMargin: boolean = false

  ngOnInit(){
    console.log(this.withMargin)
  }
  
}
