import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {TechnicalService} from "../../service/tecnhical.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{



  logged: boolean =false;
  currentUser!: User;


  constructor(private formBuilder: FormBuilder, private usersService: UserService, private technicalService: TechnicalService, private router: Router) { }

  ngOnInit(): void {
  }

  submitted() {
    this.logged=true;
  }


  loginForm: FormGroup = this.formBuilder.group({
    email: ['', { validators: [Validators.required], updateOn: 'change'}],
    password: ['', {validators: [Validators.required ], updateOn: 'change'}]
  })

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password')
  }

  submitForm(){
    this.usersService.getAll1().subscribe((response: any)=>{
      const user = response.find((a: any)=> {
        this.currentUser = a;
        return a.email === this.loginForm.value.email &&
          a.password === this.loginForm.value.password
      });


      if(user) {
      console.log(user)
        sessionStorage.setItem("userId", this.currentUser.id.toString());

        this.loginForm.reset();
        if (this.currentUser.type == "technical") {

          this.technicalService.getItemByField("userId", Number(sessionStorage.getItem("userId"))).subscribe((response: any) => {
            sessionStorage.setItem("typeId", response.id.toString());
          });

          this.router.navigate(['home']).then(r => console.log(r));
        }
        else {
          this.router.navigate(['homeUser']).then(r => console.log(r));
        }
      }
    })
  }

}
