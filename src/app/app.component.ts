import { Component } from '@angular/core';
import { NewsAPIService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app2';

  constructor(private newsApiService: NewsAPIService){};

  // news = [
  //   {
  //     headData: [] ,
  //     techNewsData : [],
  //     busData : [],
  //     entertainData :[],
  //     sportsNewsData : [],
  //     HealthNewsData : [],
  //     scienceNewsData : []
  //   }
   
  // ];
 headlinesData: any = [];
  techNewsData: any = [];
  busData: any =[];
  entertainData: any =[];
  sportsNewsData: any = [];
  HealthNewsData: any = [];
  scienceNewsData: any = [];
  top:boolean = false;
   tech:boolean = false;
   business:boolean = false;
   bollywood:boolean = false;
   sports: boolean = false;
   health: boolean = false;
   science:boolean = false;
 onClickTop(){
     this.newsApiService.gettopHeadlinesNews().subscribe(news => {
      console.log(news.articles);
        this.headlinesData = news.articles;
    })
    this.top = true;
    this.tech = false;
    this.business = false;
    this.bollywood = false;
    this.sports = false;
    this.health = false;
    this.science = false;
  }

   onClickTech(){
     this.newsApiService.getTechNews().subscribe(news => {
     console.log(news.articels);
     this.techNewsData = news.articles;
   })
   this.top = false;
   this.tech = true;
   this.business = false;
   this.bollywood = false;
   this.sports = false;
   this.health = false;
   this.science = false;
  }

 onClickBusiness() {
   
    this.newsApiService.getBusinessNews().subscribe(news => {
      this.busData = news.articles;
    })
    this.top = false;
   this.tech = false;
   this.business = true;
   this.bollywood = false;
   this.sports = false;
   this.health = false;
   this.science = false;
  }

  onClickBollywood() {
    this.newsApiService.getEntertainmentNews().subscribe(news => {
      this.entertainData = news.articles;
    })
    this.top = false;
    this.tech = false;
    this.business = false;
    this.bollywood = true;
    this.sports = false;
    this.health = false;
    this.science = false;
    }

    onClickSports(){
      this.newsApiService.getSportsNews().subscribe(news => {
        this.sportsNewsData = news.articles
      })
      this.top = false;
    this.tech = false;
    this.business = false;
    this.bollywood = false;
    this.sports = true;
    this.health = false;
    this.science = false;
    }

    onClickHealth(){
      this.newsApiService.getHealthNews().subscribe(news => {
        this.HealthNewsData = news.articles;
      })
      this.top = false;
      this.tech = false;
      this.business = false;
      this.bollywood = false;
      this.sports = false;
      this.health = true;
      this.science = false;
    }

    onScience(){
      this.newsApiService.getScienceNews().subscribe(news => {
        this.scienceNewsData = news.articles;
      })
      this.top = false;
      this.tech = false;
      this.business = false;
      this.bollywood = false;
      this.sports = false;
      this.health = false;
      this.science = true;
    }
}
