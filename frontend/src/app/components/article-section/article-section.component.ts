import { Component, OnInit } from '@angular/core';
import {NgIf, NgFor} from '@angular/common';
import { Article } from './article';
import { ArticleFilterPipe } from "../../pipes/articleFilter/article-filter.pipe";

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; 

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-article-section',
  imports: [NgIf, NgFor, ArticleFilterPipe, CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './article-section.component.html',
  styleUrls: ['./article-section.component.css']
})



export class ArticleSectionComponent implements OnInit {

  constructor(private AlertifyService : AlertifyService, private http:HttpClient) { }

  articleTitle = ""

  filterText = "";
  
  articles!: Article[];

  selectedArticle!: Article;


  viewArticle(articleId: number){
    this.http.get<Article>("http://localhost:3000/api/articles/"+articleId).subscribe(
      (response: Article) => {
          response.content = response.content.replace(/\n/g, "<br>");
          this.selectedArticle = response;
          this.AlertifyService.alert(this.selectedArticle.content);
      }
    );
  }

  ngOnInit(): void {
  this.http.get<Article[]>("http://localhost:3000/api/articles").subscribe(
    (response: Article[]) => {
      this.articles = response;
    }
  );
  }

}
