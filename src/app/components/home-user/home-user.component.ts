import {Component, inject} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Technical', cols: 1, rows: 1 , route: '/searchTechnicals'},
          { title: 'Inbox', cols: 1, rows: 1 ,route: '/home'},
          { title: 'Progress', cols: 2, rows: 2 , route: '/progress'},
        ];
      }

      return [
        { title: 'Technical', cols: 1, rows: 1 , route: '/searchTechnicals'},
        { title: 'Inbox', cols: 1, rows: 1 ,route: '/home'},
        { title: 'Progress', cols: 2, rows: 2 , route: '/progress'},

      ];
    })
  );
}
