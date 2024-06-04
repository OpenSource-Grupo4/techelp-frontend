import {Component, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogBoxComponent} from "./components/dialog-box/dialog-box.component"
import {MembershipService} from "./service/membership.service";
import {memberships} from "./entities/memberships";
import { Router } from '@angular/router';
import {Subscription} from "./entities/Subscription"


@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit{
  public ListMemberships: memberships[]=[];
  public SubscriptionOfUser: Subscription={
      id: 0,
      technical_id: 0,
      start_date: '',
      final_date: '',
      membership_id: 0
  }
  constructor(public dialog:MatDialog,private membershipService: MembershipService,private router: Router) {

  }
  openDialog(vali:number):void{
    if(vali ) {
      this.UpdateTypeMembership(2);
      this.router.navigate(['/loading'])

    }
    else if(this.SubscriptionOfUser.membership_id!=1) {
      this.dialog.open(DialogBoxComponent,{
        height: 'auto',
        width: 'auto',
      })
        this.UpdateTypeMembership(1);


    }
    else{
      alert(`You have an active membership until ${this.SubscriptionOfUser.final_date}`)
    }


  }

  GetMemberships():void{
    this.membershipService.getAll()
      .subscribe(ListMemberships =>{
        this.ListMemberships=ListMemberships;
      });
  }
  getYouSubcription():void{
    /*Aqui el usuario debe mandar su id para que se cambie su tipo de membresia*/
    this.membershipService.getSuscriptionbyUser(1)
      .subscribe(response=>{
        this.SubscriptionOfUser=response;
        console.log(`${response}`);
      })
  }

  UpdateTypeMembership(type:number):void{

    if(this.SubscriptionOfUser.membership_id != type){
        console.log(`${this.SubscriptionOfUser}`)
      this.SubscriptionOfUser.membership_id=type;
        /*Aqui el usuario debe mandar su id para que se cambie su tipo de membresia*/
        this.membershipService.PutMembership(1,this.SubscriptionOfUser)
            .subscribe(resp=>{
              this.SubscriptionOfUser=resp;
            })
        console.log(this.SubscriptionOfUser)

    }
    else{
      return;
    }

  }

  ngOnInit(): void {
    this.GetMemberships();
    this.getYouSubcription();

  }



}
