import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {


  public formrequest : FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {

  }



  ngOnInit(){
  this.formrequest=this.formBuilder.group({
    name:['',[Validators.required,Validators.name]],
    number:['',Validators.required, Validators.minLength(9)],
    day:['',Validators.required],
    hour:['',Validators.required],
    cellphone:['',Validators.required],
    Problem:['',Validators.required, Validators.requiredTrue],
    Specification:['',Validators.required]
  });
  }
  send():any{
  console.log(this.formrequest.value);
  }
}
