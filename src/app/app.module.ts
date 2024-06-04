import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { SearchTechnicalComponent } from './views/search-technical/search-technical.component';
import { SideNavToolBarComponent } from './components/side-nav-tool-bar/side-nav-tool-bar.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {TechnicalsServiceService} from "./services/technicals-service.service";
import {HttpClientModule} from "@angular/common/http";
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RequestComponent } from './components/request/request.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { TechProfileComponent } from './views/tech-profile/tech-profile.component';
import { HomeComponent } from './components/home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from "@angular/material/select";
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { TasksComponent } from './tasking/pages/tasks/tasks.component';
import {TasksService} from "./tasking/services/tasks.service";
import { TaskFormComponent } from './tasking/components/task-form/task-form.component';
import { ViewTasksComponent } from './tasking/pages/view-tasks/view-tasks.component';
import {AnalyticsComponent} from "./views/analytics/analytics.component";
import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {InventoryComponent} from "./views/inventory/inventory.component";
import { ChartComponent } from './components/chart/chart.component';
import {ChartModule} from 'angular-highcharts';
import {InventoryServiceService} from "./services/inventoryService/inventory-service.service";
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { MyProfileComponent } from './views/my-profile/my-profile.component';
import {MembershipModule} from "./Memberships/membership.module";
import { ListTaskComponent } from './monitoring/pages/list-task/list-task.component';
import { ViewProgressTaskComponent } from './monitoring/pages/view-progress-task/view-progress-task.component';
import {MonitortasksService} from "./monitoring/services/monitortasks.service";
import { LoginComponent } from './security/pages/login/login.component';
import { SignUpComponent } from './security/pages/sign-up/sign-up.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import {UserService} from "./security/service/user.service";
import {TechnicalService} from "./security/service/tecnhical.service";
import {MatDividerModule} from "@angular/material/divider";
import {MatBadgeModule} from "@angular/material/badge";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {NgOptimizedImage} from "@angular/common";
import {HomeUserComponent} from "./components/home-user/home-user.component";


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavigationComponent,
    RequestComponent,
    ToolbarComponent,
    SearchTechnicalComponent,
    SideNavToolBarComponent,
    TechProfileComponent,
    ToolbarComponent,

    NavigationComponent,
    HomeComponent,
    TasksComponent,
    TaskFormComponent,
    ViewTasksComponent,
    NavigationComponent,
    HomeComponent,
    AnalyticsComponent,
    DashboardComponent,
    InventoryComponent,
    ChartComponent,
    EditProfileComponent,
    MyProfileComponent,
    ListTaskComponent,
    ViewProgressTaskComponent,
    LoginComponent,
    SignUpComponent,
    PageNotFoundComponent,
    HomeUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,


    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTooltipModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatLegacyChipsModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatMenuModule,
    ChartModule,
    MembershipModule,
    MatSortModule,
    MatDividerModule,
    MatTooltipModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatProgressBarModule,
    NgOptimizedImage
  ],
  providers: [TechnicalsServiceService,TasksService,InventoryServiceService,MonitortasksService,UserService, TechnicalService],
  bootstrap: [AppComponent]
})
export class AppModule { }


//added dependencies
