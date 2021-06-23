import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public cats = {};

  constructor(private bs: BookService) {}

  ngOnInit(): void{
    this.bs.getCategories().subscribe(result => {
      this.cats = result;
      console.log(this.cats);
    });
  }

}
