import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TechnicalsServiceService} from "../../services/technicals-service.service";

@Component({
  selector: 'app-tech-profile',
  templateUrl: './tech-profile.component.html',
  styleUrls: ['./tech-profile.component.css']
})
export class TechProfileComponent implements OnInit{
    maxRating = 5;
    maxRatingArr:any = Array(this.maxRating).fill(0);
    techs:any = [];

    yea: string = "";
    constructor(private route: ActivatedRoute, private technicalsService: TechnicalsServiceService) {
      this.route.params.subscribe(params => {
        this.yea = params['id'];
      })
    }

  numberFunc(word: string): number{
    return Number(word);
  }
  private getTechnical(){
      let urlId = '?id=' + this.yea;
      this.technicalsService.getById(urlId).subscribe((response:any) => {
        this.techs = response;
      })
  }
  ngOnInit(): void {
      this.getTechnical();
  }
}
