import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public years = [];
  public cats = {};

  constructor(private bs: BookService) { }

  ngOnInit(): void {
    for (let i = 2000; i <= 2021; i++) {
      this.years.push(i);
    }

    this.bs.getCategories().subscribe(result => {
      this.cats = result;
    });

  }

  public in_title;
  public in_author;
  public in_pubs;
  public in_sin;
  public in_year;
  public in_cats;

  save() {
    let postData = {
      "judul": this.in_title,
      "pengarang": this.in_author,
      "penerbit": this.in_pubs,
      "sampul": "-",
      "sinopsis": this.in_sin,
      "tahun_terbit": this.in_year,
      "kategori_id": this.in_cats
    }

    this.bs.postBook(postData).subscribe(result => {
      alert("Success add data");
      console.log(result);
      this.clear();
    }, error => {
      alert("Error while saving data");
      console.log(error);
    });
  }

  clear(){
    this.in_title = "";
    this.in_author = "";
    this.in_pubs = "";
    this.in_sin = "";
  }

}
