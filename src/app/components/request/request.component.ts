// import {Component, OnInit} from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from "@angular/forms";
//
// @Component({
//   selector: 'app-request',
//   templateUrl: './request.component.html',
//   styleUrls: ['./request.component.css']
// })
// export class RequestComponent implements OnInit {
//
//
//   public formrequest : FormGroup = new FormGroup({});
//   constructor(private formBuilder: FormBuilder) {
//
//   }
//
//
//
//   ngOnInit(){
//   this.formrequest=this.formBuilder.group({
//     name:['',[Validators.required,Validators.name]],
//     number:['',Validators.required, Validators.minLength(9)],
//     day:['',Validators.required],
//     hour:['',Validators.required],
//     cellphone:['',Validators.required],
//     Problem:['',Validators.required, Validators.requiredTrue],
//     Specification:['',Validators.required]
//   });
//   }
//   send():any{
//   console.log(this.formrequest.value);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  public formrequest : FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Inicializa el formulario con los campos y validadores necesarios
    this.formrequest = this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      day: ['', Validators.required],
      hour: ['', Validators.required],
      cellphone: ['', Validators.required],
      Problem: ['', Validators.required],
      Specification: ['', Validators.required]
    });
  }

  send() {
    if (this.formrequest.valid) {
      // Aquí puedes manejar el envío del formulario
      console.log(this.formrequest.value);
    }
  }
}
