import { Component } from '@angular/core';
import {NgIf, NgFor} from '@angular/common';
import { Article } from './article';
import { ArticleFilterPipe } from "./article-filter.pipe";

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-section',
  imports: [NgIf, NgFor, ArticleFilterPipe, CommonModule, FormsModule],
  templateUrl: './article-section.component.html',
  styleUrl: './article-section.component.css'
})



export class ArticleSectionComponent {

  constructor() { }
  articleTitle = ""

  filterText = "";
  
  articles : Article[] = [
    {content:"Spring boot nedir? Nasıl kullanılır? Özellikleri nelerdir? Avantajları ve Dezavantajları...", author:"John Doe", thumbnail:"https://miro.medium.com/v2/resize:fit:750/format:webp/1*BTasEA-PDAzcoQ0A-lPyyg.png", readTime: "5 mins"},
    {content:"JavaScript nedir? Temel kavramlar ve kullanım alanları...", author:"Jane Smith", thumbnail:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", readTime: "4 mins"},
    {content:"React ile modern web uygulamaları geliştirme...", author:"Bob Brown", thumbnail:"https://www.python.org/static/community_logos/python-logo.png", readTime: "8 mins"},
    {content:"Machine Learning nedir? Algoritmalar ve uygulama alanları...", author:"Charlie Davis", thumbnail:"https://d3caycb064h6u1.cloudfront.net/wp-content/uploads/2021/06/Machine_Learning-1024x819.jpg", readTime: "2 mins"},
    {content:"Docker ile konteyner yönetimi ve uygulama dağıtımı...", author:"David Evans", thumbnail:"https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png", readTime: "5 mins"},
    {content:"Kubernetes ile mikroservis mimarisi yönetimi...", author:"Eve Foster", thumbnail:"https://kubernetes.io/images/kubernetes-horizontal-color.png", readTime: "3 mins"},
  ];

}
