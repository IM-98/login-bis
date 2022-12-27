import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { PasswordComponent } from './_pages/password/password.component';
import { SigninComponent } from './_pages/signin/signin.component';
import { SignupComponent } from './_pages/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
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
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
