import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public books = {};

  constructor(private bs: BookService) {}

  ngOnInit(): void {
    this.bs.getBooks().subscribe(result => {
      this.books = result;
      console.log(this.books);
    });
  }

}
