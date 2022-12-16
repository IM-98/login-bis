import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PasswordComponent } from './password/password.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
  }, 
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'password',
    component: PasswordComponent
  }, 
  {
    path: "dashboard",
    component: DashboardComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
