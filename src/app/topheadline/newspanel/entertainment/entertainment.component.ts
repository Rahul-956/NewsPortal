import { Component, OnInit } from '@angular/core';
import { newsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private api:newsapiService) { }

  entertainmentNews:any=[];

  ngOnInit(): void {

    this.api.tcentertainmentNews().subscribe((result: { articles: any; })=>
    {console.log(result.articles);
    this.entertainmentNews= result.articles;
    });
  }

}
