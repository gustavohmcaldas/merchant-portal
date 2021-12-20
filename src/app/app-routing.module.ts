import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantComponent } from './components/merchant/merchant.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'merchants', component: MerchantComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
