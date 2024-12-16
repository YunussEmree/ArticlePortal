import { Routes } from '@angular/router';
import { WritersSectionComponent } from '../components/writers-section/writers-section.component';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { ArticleSectionComponent } from '../components/article-section/article-section.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { LoginGuard } from '../components/login/login.guard';
import { ViewwriterComponent } from '../components/viewwriter/viewwriter.component';
import { ProfileComponent } from '../components/profile/profile.component';
//import { AdminpanelComponent } from '../components/adminpanel/adminpanel.component';
export const routes: Routes = [
    
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'writers', component: WritersSectionComponent},
    {path: 'articles', component: ArticleSectionComponent},
    //{path: 'adminpanel', component: AdminpanelComponent, canActivate: [LoginGuard]},
    {path: 'viewwriter/:id' , component: ViewwriterComponent},
    {path: 'profile/:id' , component: ProfileComponent},
    {path: 'login' , component: LoginComponent},
    {path: '**', component: NotfoundComponent}

];
