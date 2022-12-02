import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit{

  @Input() labelname!: string;
  @Input() placeholder!: string;
  @Input() type!: string;
  isPassword: boolean = true;
  
  ngOnInit() {
    this.isPassword = this.type == "password";
  }

  displayPass(){
   if(this.type === "password"){
      this.type = "text"
   }else{
    this.type = "password"
   }
  }
  
}
