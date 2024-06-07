
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyprofileApiService } from "../../services/myprofile-api.service";
import { Technical } from "./models/interfaces";

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
    // Inicializar formEdit como un FormGroup vacío
    this.formEdit = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.initializeForm();
    this.route.params.subscribe(params => {
      this.techId = +params['id'];
      if (this.techId) {
        this.loadProfile(this.techId);
      }
    });
  }

  private initializeForm() {
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
  }

  private loadProfile(id: number) {
    this.profileService.getById(id.toString()).subscribe(
      (response: Technical) => {
        this.tech = response;
        this.formEdit.patchValue(this.tech);
      },
      error => {
        console.error('Error loading profile:', error);
      }
    );
  }

  updateProfile() {
    if (this.formEdit.valid && this.tech) {
      const updatedProfile = { ...this.tech, ...this.formEdit.value };
      this.profileService.updateProfile(updatedProfile).subscribe(
        response => {
          console.log('Perfil actualizado:', response);
          this.router.navigate(['/myProfile']);
        },
        error => {
          console.error('Error updating profile:', error);
        }
      );
    } else {
      console.error('El formulario no es válido');
    }
  }
}
