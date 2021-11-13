import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class newsapiService {

  constructor(private _http: HttpClient) { }


  tctopHeadlinesNews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=1c899392dda6462794c7f9eff5a09a3e';


  tctechNews = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1c899392dda6462794c7f9eff5a09a3e';


  tcbusinessNews = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1c899392dda6462794c7f9eff5a09a3e';



  tcEntertainmentNews = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1c899392dda6462794c7f9eff5a09a3e';

  tcheadlines(): Observable<any> {
    return this._http.get(this.tctopHeadlinesNews);
  }

  tcTechNews(): Observable<any> {
    return this._http.get(this.tctechNews);
  }

  tcbusinesshNews(): Observable<any> {
    return this._http.get(this.tcbusinessNews);
  }

  tcentertainmentNews(): Observable<any> {
    return this._http.get(this.tcEntertainmentNews);
  }
}
