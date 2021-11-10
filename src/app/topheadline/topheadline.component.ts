import { Component, OnInit } from '@angular/core';
import { newsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {

  constructor(private api:newsapiService) { }
  
  topHeadlinesData:any=[];
  
  techNewsData:any=[];

  ngOnInit(): void {
    this.api.tcheadlines().subscribe((result): void=>
    {console.log(result.articles);
      this.topHeadlinesData= result.articles;
    });

    this.api.tcTechNews().subscribe((result: { articles: any; })=>
    {console.log(result.articles);
      this.techNewsData= result.articles;
    });
  }
    
}
