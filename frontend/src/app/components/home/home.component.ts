import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-home',
  imports: [NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private accountService: AccountService) {}

  isLoggedIn() {
    return this.accountService.isLoggedIn();
  }
  logout() {
    this.accountService.logout();
  }

}
