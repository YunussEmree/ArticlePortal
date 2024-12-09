import { Routes } from '@angular/router';
import { WritersSectionComponent } from '../components/writers-section/writers-section.component';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { ArticleSectionComponent } from '../components/article-section/article-section.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'writers', component: WritersSectionComponent},
    {path: 'articles', component: ArticleSectionComponent},
    {path: 'login' , component: LoginComponent},
    {path: '**', component: NotfoundComponent}

];
