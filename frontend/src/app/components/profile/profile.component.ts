import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Writer } from '../writers-section/writer';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [NgIf,CommonModule,FormsModule,HttpClientModule],
})
export class ProfileComponent {

  constructor(private router:Router, private accountService:AccountService, private http:HttpClient) {this.getWriter(10009);}

  isLoggedIn() {
    return this.accountService.isLoggedIn();
  }

  // Çıkış yap
  logout() {
    this.accountService.logout();
  }

  viewProfile(){
    this.router.navigate(['/profile/' + 10009]);
    }

  profile = {
    id: 10009,
    username: 'Kullanıcı Adı',
    bio: 'null',
    rating: "5",
    photo: 'https://via.placeholder.com/150',
    about: 'Yazar hakkında detaylı bilgi.',
    awards: '',
    articles: '',
    projects: '',
  };

    getWriter(id: number) {
      const apiUrl = `http://localhost:3000/api/writers/${id}`;
      this.http.get<Writer>(apiUrl).subscribe(
        (response: Writer) => {
          console.log('Yazar bilgisi alındı:', response);
          this.profile.username = response.username; // Gelen veriye göre güncelle
          this.profile.bio = response.bio || 'Yazar hakkında bilgi bulunamadı.';
          this.profile.rating = response.rating || "0";
          this.profile.about = response.about || 'Yazar hakkında detaylı bilgi.';
          this.profile.photo = response.photo || "https://via";
          this.profile.articles = response.articles || 'Yazarın makaleleri bulunamadı.';
          this.profile.projects = response.projects || 'Yazarın projeleri bulunamadı.';
          this.profile.awards = response.awards || 'Yazarın ödülleri bulunamadı.';
        },
        (error) => {
          console.error('Yazar bilgisi alınırken hata oluştu:', error);
        }
      );
    }

  isEditing = false;

  toggleEditMode() {
    this.isEditing = !this.isEditing;
  }

  saveProfile() {
    this.isEditing = false;

    // API'ye güncelleme isteği gönder
    this.updateWriter(this.profile).subscribe()
  }

  cancelEdit() {
    this.isEditing = false;
  }

  updateWriter(writer: Writer): Observable<Writer> {
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token'
      })
    }
    
    return this.http.put<Writer>('http://localhost:3000/api/writers/' + writer.id, writer, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data)))
    );
  }

}
