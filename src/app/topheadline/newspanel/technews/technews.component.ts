import { Component, OnInit } from '@angular/core';
import { newsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private api:newsapiService) { }
  
  techNewsData:any=[];

  ngOnInit(): void {

    this.api.tcTechNews().subscribe((result: { articles: any; })=>
    {console.log(result.articles);
    this.techNewsData= result.articles;
    });
  }

  ngOnDestroy() {
    this.techNewsData().unsubscribe()
  }

}
