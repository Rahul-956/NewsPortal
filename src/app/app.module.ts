import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { newsapiService } from './services/newsapi.service';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TechnewsComponent } from './topheadline/newspanel/technews/technews.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { NewspanelComponent } from './newspanel/newspanel.component';


@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    TechnewsComponent,
    AboutusComponent,
    // RegistrationComponent,
    LoginComponent,
    NewspanelComponent
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
export class AppModule {
}
