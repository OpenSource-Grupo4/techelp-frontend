import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'DashBoard', cols: 1, rows: 1 , route: '/dashboard'},
          { title: 'Petition', cols: 1, rows: 1 ,route: '/home'},
          { title: 'Task', cols: 2, rows: 2 , route: '/task'},
        ];
      }

      return [
        { title: 'DashBoard', cols: 1, rows: 1 , route: '/dashboard'},
        { title: 'Petition', cols: 1, rows: 1 ,route: '/home'},
        { title: 'Task', cols: 2, rows: 2 , route: '/task'},

      ];
    })
  );
}
