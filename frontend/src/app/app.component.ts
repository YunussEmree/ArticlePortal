import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ArticleSectionComponent } from "./article-section/article-section.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./login/login.component";
import { WritersSectionComponent } from "./writers-section/writers-section.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ArticleSectionComponent, FooterComponent, LoginComponent, WritersSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'articleportal';
}
