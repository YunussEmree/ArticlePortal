import { Component, OnInit } from '@angular/core';
import {NgIf, NgFor} from '@angular/common';
import { Article } from './article';
import { ArticleFilterPipe } from "./article-filter.pipe";

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; 
import { AlertifyService } from '../services/alertify.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-article-section',
  imports: [NgIf, NgFor, ArticleFilterPipe, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './article-section.component.html',
  styleUrls: ['./article-section.component.css']
})



export class ArticleSectionComponent implements OnInit {

  constructor(private AlertifyService : AlertifyService, private http:HttpClient) { }

  articleTitle = ""

  filterText = "";
  
  articles!: Article[];

  viewArticle(articleId: number){
    this.AlertifyService.success("Article with id: " + articleId + " is selected.");
  }

  ngOnInit(): void {
  this.http.get<Article[]>("http://localhost:3000/articles").subscribe(
    (response: Article[]) => {
      console.log(response);
      this.articles = response;
    }
  );
  }

}
