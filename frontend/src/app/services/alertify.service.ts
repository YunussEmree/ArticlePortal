import { Injectable } from '@angular/core';

declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message: string){
    alertify.success(message);
  }
  error(message: string){
    alertify.error(message);
  }
  warning(message: string){
    alertify.warning(message);
  }
  message(message: string){
    alertify.message(message);
  }
  alert(title:string, message: string){
    alertify.alert(title, message);
  }
}
