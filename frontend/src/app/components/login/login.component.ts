import { Component } from '@angular/core';
import { LoginGuard } from './login.guard';
import { FormsModule, NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from './user';
import { CommonModule, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [LoginGuard]
})
export class LoginComponent {

  model:User = new User();

  constructor(private accountService:AccountService) {
  }

  login(form:NgForm){
    if(this.accountService.login(this.model)) {  }
    else {
      form.reset();
      alert("Invalid email or password!");
    }
  }
}
