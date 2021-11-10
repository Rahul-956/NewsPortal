import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {newsapiService} from './services/newsapi.service'
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';

// import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    TopheadlineComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [newsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
