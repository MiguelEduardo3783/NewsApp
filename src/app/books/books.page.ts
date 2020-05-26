import { BooksService } from './../services/books.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  books: [];

  constructor(private booksService: BooksService) { }



  ngOnInit() {
  }

  ionViewDidEnter(){
    this.booksService.getBooks().subscribe( (books) =>{
      console.log(books);
      this.books = books.results.books;
    })
  }

}
