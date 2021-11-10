import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { LoginComponent } from './login/login.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { TechnewsComponent } from './topheadline/newspanel/technews/technews.component';
import { AboutusComponent } from './aboutus/aboutus.component';
// import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:TopheadlineComponent},// top headlines component
  // {path:'login', component:LoginComponent}// login component
  // {path:'contact', component:ContactComponent}
  // {path:'', redirectTo:'top-news' , pathMatch:'full'},
  {path:'technews', component:TechnewsComponent},
  {path:'about-us', component:AboutusComponent},
  // {path:'sign-up', component:RegistrationComponent},
  {path:'login',component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
