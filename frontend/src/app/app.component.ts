import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleSectionComponent } from "./article-section/article-section.component";
import { LoginComponent } from "./login/login.component";
import { WritersSectionComponent } from "./writers-section/writers-section.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticleSectionComponent, LoginComponent, WritersSectionComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'articleportal';
}
