import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership/membership.component';
import {MatCardModule} from "@angular/material/card";
import { DialogBoxComponent } from './membership/components/dialog-box/dialog-box.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {RouterLink} from "@angular/router";
import { LoadingComponent } from './membership/page/loading/loading.component';




@NgModule({
  declarations: [
    MembershipComponent,
    DialogBoxComponent,
    LoadingComponent
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatInputModule,
        RouterLink
    ],
  exports: [
    MembershipComponent,
      LoadingComponent
  ]
})
export class MembershipModule { }
