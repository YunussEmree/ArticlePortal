import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Router } from "@angular/router";
import { AccountService } from "../services/account.service";

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private accountService:AccountService, private router:Router) {

     }
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {
        let logged = this.accountService.isLoggedIn();
        if(logged) {
            alert("You are already authenticated!");
            return true;
            
        }
        this.router.navigate(["login"]);
        alert("You have to login first!");
        return false;
    }
    
}