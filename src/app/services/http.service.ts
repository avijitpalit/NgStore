import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly ROOT_URL;

  constructor(public http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }
  post(uri: string, payload: Object){
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload, {observe: 'response'});
  }
}
