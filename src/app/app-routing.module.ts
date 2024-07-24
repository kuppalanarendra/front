import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


 export const routes: Routes = [
 
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect root to login or another default path
  { path: 'user', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
];
  


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
