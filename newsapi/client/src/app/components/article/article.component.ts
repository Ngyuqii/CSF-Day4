import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  constructor(private newsSvc: NewsService) { }
  
  articles$!: Promise<Article[]>;

  //Subscribes to the onNewsArticles observable in the news service
  //When new articles are emitted by the observable, articles$ is updated with the new value
  ngOnInit(): void {
    this.newsSvc.onNewsArticles.subscribe(
      p => {
        console.info(">>>Subscribing to server.");
        this.articles$ = p;
      }
    )
  }

  /*Alternative to resolve the promise

  articles: Article[] = [];

  //Subscribe to the Observable and get notified when new articles are available
  //Convert the emitted Promise to a resolved Promise and assign the data to articles
  ngOnInit(): void {
    this.newsSvc.onNewsArticles.subscribe(
      p => {
        p.then(data => this.articles = data);
      }
    )
  }
  
  */

}
