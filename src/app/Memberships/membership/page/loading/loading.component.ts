import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  constructor(private router: Router) {  }

    ReturnPage():void{
      this.router.navigate(['myProfile']);

    }
}
