import { Injectable } from '@angular/core';
import { User } from '../components/login/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  login(user: User): boolean {
    if (user.email === "senyigityunusemre@gmail.com" && user.password === "12345") {
      localStorage.setItem("isLogged", "true");
      console.log("Logged in");
      return true;
    } else {
      localStorage.setItem("isLogged", "false");
      return false;
    }
  }

  isLoggedIn(): boolean {
    const isLogged = localStorage.getItem("isLogged");
    console.log("Is logged in: " + isLogged);
    return isLogged === "true";
  }

  logout(): void {
    localStorage.setItem("isLogged", "false");
    localStorage.clear();
    console.log("Logged out");
  }
}
