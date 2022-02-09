import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { TutorialDetailComponent } from './tutorial-detail/tutorial-detail.component';
import { TutorialEnrolledComponent } from './tutorial-enrolled/tutorial-enrolled.component';
import { MyTutorialsComponent } from './my-tutorials/my-tutorials.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { CreateTutorialComponent } from './create-tutorial/create-tutorial.component';
import { EditTutorialComponent } from './edit-tutorial/edit-tutorial.component';
import { AdminTutorialComponent } from './admin-tutorial/admin-tutorial.component';
import { SharedService } from './shared.service';
import { AuthGuard } from './auth.guard';
import { ClientGuard } from './client.guard';
import { InstructorGuard } from './instructor.guard';
import { AdminGuard } from './admin.guard';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    TutorialsComponent,
    TutorialDetailComponent,
    TutorialEnrolledComponent,
    MyTutorialsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EditProfileComponent,
    HomeComponent,
    CreateTutorialComponent,
    EditTutorialComponent,
    AdminTutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	DataTablesModule,
	NgbModule
  ],
  providers: [Title, SharedService, ClientGuard, InstructorGuard, AdminGuard, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
