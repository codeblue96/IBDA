import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  date : Date
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private ApiUrl =
    'https://wp.ibda.dev/wp-json/wp/v2/posts?page=1&per_page=5&order=descstatus=publish&offset=3';

  blogList: any[] = [];

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.ApiUrl);
  }
}
