import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {TcnewsapiService} from './service/tcnewsapi.service'
import { TopheadlineComponent } from './topheadline/topheadline.component';


@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TcnewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
