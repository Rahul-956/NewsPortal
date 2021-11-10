import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class newsapiService {

  constructor(private _http:HttpClient) { }
   // top Headline API Url
   tctopHeadlinesNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=60db0df23e01425b997a00de1bc6c2a0';
   //tech news api url
   tctechNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=60db0df23e01425b997a00de1bc6c2a0';

   //business news api
   tcbusinessNews='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=60db0df23e01425b997a00de1bc6c2a0';
   //entertainment news api
   tcEntertainmentNews='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=60db0df23e01425b997a00de1bc6c2a0';

   tcheadlines():Observable<any>{
     return this._http.get(this.tctopHeadlinesNews);
     
   }

   tcTechNews():Observable<any>{
    return this._http.get(this.tctechNews);
   }
   
   tcbusinesshNews():Observable<any>{
      return this._http.get(this.tcbusinessNews);
    
  
    }
   

    tcentertainmentNews():Observable<any>{
      return this._http.get(this.tcEntertainmentNews);
    }
}
