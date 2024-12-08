import { Routes } from '@angular/router';
import { WritersSectionComponent } from './writers-section/writers-section.component';
import { ArticleSectionComponent } from './article-section/article-section.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'writers', component: WritersSectionComponent},
    {path: 'articles', component: ArticleSectionComponent},
    {path: 'login' , component: LoginComponent}

];
