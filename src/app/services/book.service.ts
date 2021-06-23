import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  book_url = 'http://api.titikkoma.web.id/public/api/buku-get';
  post_book_url = 'http://api.titikkoma.web.id/public/api/buku-store';
  cats_url = 'http://api.titikkoma.web.id/public/api/kategori-get';

  constructor(private http: HttpClient) { }
  getBooks(){
    return this.http.get(`${this.book_url}`);
  }

  getCategories(){
    return this.http.get(`${this.cats_url}`);
  }

  postBook(data){
    return this.http.post(`${this.post_book_url}`, data);
  }
}
