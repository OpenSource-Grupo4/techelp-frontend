import { Component, OnInit } from '@angular/core';
import { MyprofileApiService } from "../../services/myprofile-api.service";
import { Technical } from "../../models/interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  maxRating = 5;
  maxRatingArr: any = Array(this.maxRating).fill(0);
  techs: Technical[] = [];
  selectedTech: Technical | null = null;

  constructor(private technicalsService: MyprofileApiService , private router: Router) {}

  numberFunc(word: string): number {
    return Number(word);
  }

  private getAllTechnicals() {
    this.technicalsService.getAll().subscribe((response: Technical[]) => {
      this.techs = response;
    });
  }

  selectTechnician(tech: Technical) {
    this.router.navigate(['/edit-profile', tech.id]);
  }

  beAMember(){
    this.router.navigate(['/user/Membership']);
  }

  ngOnInit(): void {
    this.getAllTechnicals();
  }
}
