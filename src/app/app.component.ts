import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNavbar = true;
  user : boolean | undefined;

  title = 'TecHelp-FronEnd';
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !(this.showNavbar = event.url === '/login' || event.url === '/signup');
        this.user = event.url == '/homeUser' || event.url == "/searchTechnicals" || event.url == "/progress";
      }
    });
  }
  options=[
    {path:'/task',title:'Task'}
  ]
}
