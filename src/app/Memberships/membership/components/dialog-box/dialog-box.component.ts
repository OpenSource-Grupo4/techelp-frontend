import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup,Validators} from "@angular/forms";

import { Router } from '@angular/router';
import {MembershipService} from "../../service/membership.service";
import {MembershipComponent} from "../../membership.component";

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {

  @ViewChild(MembershipComponent) membershipComponent?: MembershipComponent;
  constructor(private fb:FormBuilder,
              private router: Router,
              private membershipService: MembershipService) {  }

  public myForm: FormGroup = this.fb.group({
    Number_Card:['',[Validators.required, Validators.maxLength(16)]],
    Name: ['',Validators.min(3)],
    Last_Name:['',Validators.min(3)],
    Email:['',[Validators.required,Validators.email]],
    Date:['00/00',[Validators.required,Validators.maxLength(5)]],
    Cvv:['000',[Validators.required,Validators.maxLength(3)]]
  })



  Onsave():void{
    if(this.myForm.invalid ){
      alert("Valores invalidos");
      return;
    }
    /*Envio de datos del formulario*/
    console.log(this.myForm.value);
    this.router.navigate(['/loading']);
    this.myForm.reset();


  }





}
