import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-messenger';
  // showOtherComponent:boolean = false;
  // constructor(router: Router) {
  //   router.events.forEach((event) => {
  //     if (event instanceof NavigationStart) {
  //       this.showOtherComponent = event.url !== '/signup' && event.url !== "/password";
  //     }
  //   });
  // }
}
