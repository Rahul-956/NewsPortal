import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http:HttpClient) { }
   // top Headline API Url
   topHeadlinesNews='https://newsapi.org/v2/top-headlines?country=us&apiKey=60db0df23e01425b997a00de1bc6c2a0';

   tcheadlines():Observable<any>{
     return this._http.get(this.topHeadlinesNews);
   }

  
}
