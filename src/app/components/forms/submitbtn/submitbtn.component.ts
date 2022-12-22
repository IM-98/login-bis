import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submitbtn',
  templateUrl: './submitbtn.component.html',
  styleUrls: ['./submitbtn.component.scss']
})
export class SubmitbtnComponent {

  @Input() class!: string;
  @Input() value!: string;
  @Input() name!: string;

}
