import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { WritersSectionComponent } from "./components/writers-section/writers-section.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./components/home/home.component";
import { ArticleSectionComponent } from './components/article-section/article-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticleSectionComponent, LoginComponent, WritersSectionComponent, CommonModule, FormsModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'articleportal';
}
