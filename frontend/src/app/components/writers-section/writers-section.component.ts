import { Component } from '@angular/core';
import { Writer } from './writer';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { WriterfilterPipe } from '../../pipes/writerFilter/writerfilter.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgFor} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import { AccountService } from '../services/account.service';


@Component({
  selector: 'app-writers-section',
  imports: [NgFor, WriterfilterPipe, CommonModule, FormsModule, HttpClientModule, RouterOutlet],
  templateUrl: './writers-section.component.html',
  styleUrl: './writers-section.component.css'
})
export class WritersSectionComponent {

  constructor(private AlertifyService : AlertifyService, private http:HttpClient, private accountService:AccountService) { }


  isLoggedIn() {
    return this.accountService.isLoggedIn();
  }
  logout() {
    this.accountService.logout();
  }
  
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
