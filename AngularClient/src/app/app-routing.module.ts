import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminTutorialComponent } from './admin-tutorial/admin-tutorial.component';
import { CreateTutorialComponent } from './create-tutorial/create-tutorial.component';
import { HomeComponent } from './home/home.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditTutorialComponent } from './edit-tutorial/edit-tutorial.component';
import { LoginComponent } from './login/login.component';
import { MyTutorialsComponent } from './my-tutorials/my-tutorials.component';
import { TutorialDetailComponent } from './tutorial-detail/tutorial-detail.component';
import { TutorialEnrolledComponent } from './tutorial-enrolled/tutorial-enrolled.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

const routes: Routes = [
	{path:'register', component:RegisterComponent},
	{path:'profile', component:ProfileComponent},
	{path:'manage/tutorials', component:AdminTutorialComponent},
	{path:'tutorials/create', component:CreateTutorialComponent},
	{path:'', component:HomeComponent},
	{path:'profile/edit', component:EditProfileComponent},
	{path:'tutorials/edit', component:EditTutorialComponent},
	{path:'login', component:LoginComponent},
	{path:'tutorials/mytutorials', component:MyTutorialsComponent},
	{path:'tutorials/enrolled', component:TutorialEnrolledComponent},
	{path:'tutorials/detail', component:TutorialDetailComponent},
	{path:'tutorials/all', component:TutorialsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
