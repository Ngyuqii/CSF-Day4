import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject, firstValueFrom } from 'rxjs';
import { Article } from './models';

const SB_URL = "http://localhost:8080/api/news";
//Railway
//const SB_URL = "https://news-production-a98c.up.railway.app/api/news";

@Injectable()
export class NewsService {
  
  constructor(private http: HttpClient) { }

  onNewsArticles = new Subject<Promise<Article[]>>();

  //Method to make a HTTP GET request to the server
  //Returns a Promise of an array of Article object
  //http://localhost:8080/api/news/sg/general?pageSize=4
  getNews(country: string, category: string, pageSize: number): Promise<Article[]> {

    console.info(`>>> Country: ${country}, Category: ${category}, Page Size: ${pageSize}`);

    const params = new HttpParams()
        .set("pageSize", pageSize);
    
    //Method to retrieve data and cast to Article[]
    //Emit the data to subscribers of onNewsArticle subject
    return firstValueFrom(
      this.http.get<Article[]>(`${SB_URL}/${country}/${category}`, { params })
    )
    .then(result => {
      console.info(">>> Response: ", result);
      const a = result as Article[];
      this.onNewsArticles.next(Promise.resolve(a));
      return a;
    })

  }

}