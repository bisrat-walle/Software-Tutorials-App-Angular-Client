import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
