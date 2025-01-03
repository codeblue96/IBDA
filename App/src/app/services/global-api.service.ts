import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { SafeHtml } from '@angular/platform-browser';

export interface GlobalBlogs {
  id: number;
  title: string;
  content: string;
  contentarray: [];
  img: string;
  date: string;
  author: string;
  author_name: string;
  category: string[];
  topic: string;
  sanitizedContent?: SafeHtml;
}

export interface GlobalSlider {
  id: number;
  thumbnail: string;
  largeImg: string;
  desc: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class GlobalApiService {
  mainUrl: string = 'https://wp.ibda.dev';
  private baseUrl = this.mainUrl + '/wp-json/wp/v2/posts';
  private authorUrl = this.mainUrl + '/wp-json/wp/v2/users';
  private mediaApiUrl =
    this.mainUrl + '/wp-json/wp/v2/media?type=image&category=';

  constructor(private http: HttpClient) {}

  getBlogs(page: number = 1, perPage: number = 5): Observable<GlobalBlogs[]> {
    const apiUrl = `${this.baseUrl}?page=${page}&per_page=${perPage}&order=desc&status=publish`;
    return this.http
      .get<any[]>(apiUrl)
      .pipe(map((posts) => posts.map((post) => this.processPost(post))));
  }

  getLatestBlogs(
    page: number = 1,
    perPage: number = 5
  ): Observable<GlobalBlogs[]> {
    return this.getBlogs(page, perPage);
  }

  getBlogById(id: string): Observable<GlobalBlogs> {
    const apiUrl = `${this.baseUrl}/${id}`;
    return this.http
      .get<GlobalBlogs>(apiUrl)
      .pipe(map((post) => this.processPost(post)));
  }

  getAuthorById(authorId: string): Observable<any> {
    return this.http.get<any>(`${this.authorUrl}/${authorId}`);
  }

  getCategoryById(categoryId: string): Observable<any> {
    return this.http.get<any>(`${this.authorUrl}/${categoryId}`);
  }

  fetchSliderImageUrl(category: string): Observable<GlobalSlider[]> {
    console.log(category);
    return this.http.get<any[]>(`${this.mediaApiUrl}${category}`).pipe(
      map((mediaArray) =>
        mediaArray.map((media) => ({
          id: media.id,
          thumbnail: media?.media_details?.sizes?.full?.source_url || '', // Default to empty string if undefined
          largeImg:
            media?.media_details?.sizes?.large?.source_url ||
            media?.source_url ||
            '', // Default to empty string if undefined
          desc: 'blank',
          title: 'dummy data',
        }))
      )
    );
  }

  private processPost(post: any): GlobalBlogs {
    return {
      id: post.id,
      title: post.title.rendered,
      content: post.content.rendered,
      date: post.date,
      author: post.author,
      author_name: post.author_details.author_first_name,
      topic: post.topic,
      contentarray: post.content.rendered,
      category: Array.isArray(post.additional_details.categories)
        ? post.additional_details.categories.join(' | ').trim()
        : post.additional_details.categories,
      img: post.additional_details.featured_image,
    };
  }
}
