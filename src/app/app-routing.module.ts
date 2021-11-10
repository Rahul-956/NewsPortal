import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
// import { LoginComponent } from './login/login.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';

const routes: Routes = [
  {path:'', component:TopheadlineComponent},// top headlines component
  // {path:'login', component:LoginComponent}// login component
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
