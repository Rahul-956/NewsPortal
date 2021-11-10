import { Component, OnInit } from '@angular/core';
import { newsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  constructor(private api:newsapiService) { }

  businessNews:any=[];

  ngOnInit(): void {

    this.api.tcbusinesshNews().subscribe((result: { articles: any; })=>
    {console.log(result.articles);
    this.businessNews= result.articles;
    });
  }

}
