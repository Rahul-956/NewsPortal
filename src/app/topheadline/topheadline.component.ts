import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
  
  topHeadlinesData:any=[];
  
  techNewsData:any=[];

  ngOnInit(): void {
    this.api.tcheadlines().subscribe((result)=>
    {console.log(result.articles);
      this.topHeadlinesData= result.articles;
    });

    this.api.tcTechNews().subscribe((result: { articles: any; })=>
    {console.log(result.articles);
      this.techNewsData= result.articles;
    });

}
}
