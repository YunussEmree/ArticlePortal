import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Writer } from '../writers-section/writer';

@Component({
  selector: 'app-viewwriter',
  imports: [NgIf, NgFor],
  templateUrl: './viewwriter.component.html',
  styleUrls: ['./viewwriter.component.css'],
})
export class ViewwriterComponent implements OnInit {
  model: Writer = new Writer(0, '', '', '', '', ''); // Kullanıcı bilgileri için model
  writerId = 0;

  constructor(
    private accountService: AccountService,
    private http: HttpClient,
    private route: ActivatedRoute // Route parametrelerini almak için
  ) {}

  ngOnInit(): void {
    // Route parametresinden ID'yi al
    this.writerId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.writerId) {
      this.getWriter(this.writerId);
    }
  }

  // Kullanıcı giriş kontrolü
  isLoggedIn() {
    return this.accountService.isLoggedIn();
  }

  // Çıkış yap
  logout() {
    this.accountService.logout();
  }

  getStarsArray(): number[] {
    return Array(5).fill(0);
  }

  // API'den yazar bilgilerini getir
  getWriter(id: number) {
    const apiUrl = `http://localhost:3000/api/writers/${id}`;
    this.http.get<Writer>(apiUrl).subscribe(
      (response: Writer) => {
        console.log('Yazar bilgisi alındı:', response);
        this.model = response;
        this.model.username = response.username; // Gelen veriye göre güncelle
        this.model.bio = response.bio || 'Yazar hakkında bilgi bulunamadı.';
        this.model.rating = response.rating || "0";
        this.model.photo = response.photo || "https://via";
      },
      (error) => {
        console.error('Yazar bilgisi alınırken hata oluştu:', error);
      }
    );
  }
}
