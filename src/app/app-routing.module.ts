import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { LoginComponent } from './login/login.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { TechnewsComponent } from './topheadline/newspanel/technews/technews.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { BusinessnewsComponent } from './topheadline/newspanel/businessnews/businessnews.component';
import { EntertainmentComponent } from './topheadline/newspanel/entertainment/entertainment.component';

const routes: Routes = [
 
  {path:'', component:TopheadlineComponent},// top headlines component
  // {path:'contact', component:ContactComponent}
  {path:'technews', component:TechnewsComponent},
  {path:'businessnews', component:BusinessnewsComponent},
  {path:'entertainmentnews', component:EntertainmentComponent},
  {path:'about-us', component:AboutusComponent},
  {path:'register', component:RegistrationComponent},
  {path:'login',component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
