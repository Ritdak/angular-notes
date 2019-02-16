import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   
  <!--header-->
  <app-header></app-header>

  <!--contact us-->
  

    <!--home page-->
   

   <!--routes will be rendered here-->
     
    <router-outlet></router-outlet>

    <!--footer-->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'my-angular-site';
}
