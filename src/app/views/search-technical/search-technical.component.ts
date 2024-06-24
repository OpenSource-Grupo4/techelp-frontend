import {Component, OnInit} from '@angular/core';
import {formatNumber} from "@angular/common";
import {TechnicalsServiceService} from "../../services/technicals-service.service";

@Component({
  selector: 'app-search-technical',
  templateUrl: './search-technical.component.html',
  styleUrls: ['./search-technical.component.css']
})
export class SearchTechnicalComponent implements OnInit{
  maxRating = 5;
  maxRatingArr:any = Array(this.maxRating).fill(0);
  techs:any;

  constructor(private technicalsService: TechnicalsServiceService) {
    this.techs = [];
  }
  numberFunc(word: string): number{
    return Number(word);
  }

  private getAllTechnicals(){
    this.technicalsService.getAll().subscribe((response:any) => {
      this.techs = response;
    })
  }
  protected readonly formatNumber = formatNumber;

  ngOnInit(): void {
    this.getAllTechnicals();
  }
}
