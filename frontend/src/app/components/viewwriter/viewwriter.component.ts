import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../login/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewwriter',
  imports: [NgIf, NgFor],
  templateUrl: './viewwriter.component.html',
  styleUrl: './viewwriter.component.css',
})
export class ViewwriterComponent {
  constructor(private accountService: AccountService, private http:HttpClient) {}


  getStarsArray(): number[] {
    return Array(5).fill(0);
  }

  isLoggedIn() {
    return this.accountService.isLoggedIn();
  }
  logout() {
    this.accountService.logout();
  }

  model: User = new User();

  photoUrl: string = 'https://via.placeholder.com/150';
  name: string = 'Emre';
  about: string = 'I am a software developer';
  rating: number = 4.5;
  
  ngOnInit(): void {
    this.http.get<User>("http://localhost:3000/api/writers/").subscribe(
      (response: User) => {
        this.model = response;
      }
    );
  }




}
