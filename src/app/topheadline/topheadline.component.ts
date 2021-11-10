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

  ngOnInit(): void {
    this.api.tcheadlines().subscribe((result: { articles: any; }): void=>
    {console.log(result.articles);
      this.topHeadlinesData= result.articles;
    });

   
  }

    
}
