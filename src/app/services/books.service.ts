import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  apiKey: string = "bmF7iUeX5GOFGbQ12NW7Qq9fuKIAhhFg";
  url: string = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${this.apiKey}`;

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
