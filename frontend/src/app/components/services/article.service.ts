import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../article-section/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private path = "/articles";

  constructor(private http: HttpClient) { }

  getData(): Observable<Article[]> {
    return this.http.get<Article[]>(this.path);
  }
}
