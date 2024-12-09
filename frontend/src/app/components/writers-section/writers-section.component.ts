import { Component } from '@angular/core';
import { Writer } from './writer';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { WriterfilterPipe } from '../../pipes/writerFilter/writerfilter.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgFor} from '@angular/common';


@Component({
  selector: 'app-writers-section',
  imports: [NgFor, WriterfilterPipe, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './writers-section.component.html',
  styleUrl: './writers-section.component.css'
})
export class WritersSectionComponent {

  constructor(private AlertifyService : AlertifyService, private http:HttpClient) { }
  
  filterText = "";

  writers!: Writer[];

  viewArticle(articleId: number){
    this.AlertifyService.success("Article with id: " + articleId + " is selected.");
  }

  ngOnInit(): void {
  this.http.get<Writer[]>("http://localhost:3000/api/writers").subscribe(
    (response: Writer[]) => {
      this.writers = response;
    }
  );
  }

}
