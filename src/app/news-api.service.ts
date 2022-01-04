import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsAPIService {

  constructor(private http: HttpClient) { }

  // topHeadlinesNew = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=5a7471fb523a4ca69fe9258d5617bae3';
  topHeadlinesNew = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=5a7471fb523a4ca69fe9258d5617bae3';
  techNewsData = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=5a7471fb523a4ca69fe9258d5617bae3';
  businessData = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5a7471fb523a4ca69fe9258d5617bae3';
  entertainmentData ='https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=5a7471fb523a4ca69fe9258d5617bae3'
  sportsData = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=5a7471fb523a4ca69fe9258d5617bae3'
  healthData = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=5a7471fb523a4ca69fe9258d5617bae3'
  scienceData = 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=5a7471fb523a4ca69fe9258d5617bae3'
  
  gettopHeadlinesNews(): Observable<any>{
      return this.http.get(this.topHeadlinesNew)
  }

   getTechNews(): Observable<any>{
     return this.http.get(this.techNewsData);
   }

   getBusinessNews(): Observable<any>{
      return this.http.get(this.businessData);
   }

   getEntertainmentNews(): Observable<any>{
    return this.http.get(this.entertainmentData);
 }

 getSportsNews(): Observable<any>{
  return this.http.get(this.sportsData);
}

getHealthNews(): Observable<any>{
  return this.http.get(this.healthData);
}

getScienceNews(): Observable<any>{
  return this.http.get(this.scienceData);
}

}