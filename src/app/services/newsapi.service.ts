import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class newsapiService {

  constructor(private _http:HttpClient) { }
   // top Headline API Url
   topHeadlinesNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=60db0df23e01425b997a00de1bc6c2a0';
   //tech news api url
   techNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=60db0df23e01425b997a00de1bc6c2a0';

   tcheadlines():Observable<any>{
     return this._http.get(this.topHeadlinesNews);
     
   }

   tcTechNews():Observable<any>{
    return this._http.get(this.techNews);
    
  }

  
}