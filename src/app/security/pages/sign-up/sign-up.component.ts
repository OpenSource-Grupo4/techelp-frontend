import {Component, ViewChild} from '@angular/core';
import {Technical} from "../../model/technical";
import {User} from "../../model/user";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {TechnicalService} from "../../service/tecnhical.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  userData!: User;
  newUser: User;
  users: User[]=[];
  newTechnical: Technical;

  /*
  newClient: Client;
  */


  submitted: boolean = false;
  isEditMode: boolean = false;
  types: string[] = [
    "technical", "client"
  ]


  @ViewChild('signupForm', {static: true})
  signupForm!: NgForm;

  registerForm: FormGroup = this.formBuilder.group({
    firstName: ['', {validators: [Validators.required], updatedOn: 'change'}],
    paternalSurname: ['', {validators: [Validators.required], updatedOn: 'change'}],
    maternalSurname: ['', {validators: [Validators.required], updatedOn: 'change'}],
    password: ['', {validators: [Validators.required], updatedOn: 'change'}],
    email: ['', {validators: [Validators.required], updatedOn: 'change'}],
    type: ['', {validators: [Validators.required], updatedOn: 'change'}],
  })

  constructor(private usersService: UserService, private formBuilder: FormBuilder,
              private router: Router, private technicalService: TechnicalService, /*private clientService: ClientService*/) {
    this.userData = {} as User;
    this.newUser={}as User;
    this.newTechnical={}as Technical;
    /*this.newClient={}as Client;*/
  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe((response: any) =>{
      this.users=response.content;
      console.log(this.users.length)
    })
  }

  get first_name() {
    return this.registerForm.get('firstName');
  }

  get paternal_surname() {
    return this.registerForm.get('paternalSurname');
  }

  get maternal_surname() {
    return this.registerForm.get('maternalSurname');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get type() {
    return this.registerForm.get('type');
  }

  addUser(){
    this.newUser.id=0;
    this.newUser.email=this.registerForm.value.email;
    this.newUser.password=this.registerForm.value.password;
    this.newUser.type=this.registerForm.value.type;


    this.usersService.create(this.newUser).subscribe(response=>{

      if(this.newUser.type=="technical"){

        this.newTechnical.id=0;

        this.newTechnical.user_id =Number(this.users.length+1);

        this.newTechnical.name=this.userData.firstName;
        this.newTechnical.lastname=this.userData.paternalSurname+" "+this.userData.maternalSurname;


        this.newTechnical.email=this.userData.email;
        this.newTechnical.photo="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
        //this.newPatient.createdAt=new Date().toLocaleDateString();

        this.technicalService.create(this.newTechnical).subscribe();
      }

      this.registerForm.reset();

      this.router.navigate(['login']);
    })




  }


}
