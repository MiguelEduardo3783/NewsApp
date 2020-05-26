import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'e3bcc305f4674a3d833f65ae1128f90f';
  constructor(private httpClient: HttpClient) { }

  getNews(): Observable<any> {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=mx&apiKey=${this.API_KEY}`);
  }
}
