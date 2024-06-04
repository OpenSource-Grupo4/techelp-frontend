import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { MyprofileApiService } from "../../services/myprofile-api.service";
import { Technical } from "../../models/interfaces";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  formEdit: FormGroup;
  techId: number | undefined;
  tech: Technical | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: MyprofileApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formEdit = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: [''],
      description: [''],
      address: [''],
      city: [''],
      experience: [''],
      photo: [''],
      price: [''],
      ranking: [''],
    });

    this.route.params.subscribe(params => {
      this.techId = +params['id'];
      if (this.techId) {
        this.profileService.getById(this.techId.toString()).subscribe((response: Technical) => {
          this.tech = response;
          this.formEdit.patchValue(this.tech);
        });
      }
    });
  }

  updateProfile() {
    if (this.formEdit.valid && this.tech) {
      const updatedProfile = { ...this.tech, ...this.formEdit.value };
      this.profileService.updateProfile(updatedProfile).subscribe((response) => {
        console.log('Perfil actualizado:', response);
        this.router.navigate(['/myProfile']);
      });
    } else {
      console.error('El formulario no es válido');
    }
  }

  ngOnInit(): void {}
}
