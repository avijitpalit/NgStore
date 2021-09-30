import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  error: string = 'NO ERROR';

  constructor(public httpService: HttpService) { }

  registerUser(userData: Object){
    return this.httpService.post('register', userData);
  }
}
