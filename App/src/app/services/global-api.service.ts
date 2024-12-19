import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { SafeHtml } from '@angular/platform-browser';

// Interface for Blog data
export interface Blog {
  id: number;
  title: string;
  content: string;
  img: string; // Image URL
  date: string; // Date when the blog was published
  author: string; // Author of the blog
  topic: string; // The topic/category of the blog
  sanitizedContent?: SafeHtml;
}

@Injectable({
  providedIn: 'root',
})
export class GlobalApiService {
  mainUrl: string = 'https://wp.ibda.dev';

  private baseUrl = this.mainUrl + '/wp-json/wp/v2/posts'; // Base API URL
  private authorUrl = this.mainUrl + '/wp-json/wp/v2/users'; // Base API URL
  private mediaApiUrl = this.mainUrl + '/wp-json/wp/v2/media'; // Media API URL

  constructor(private http: HttpClient) {}

  // Method to fetch blogs with a dynamic page parameter
  getBlogs(page: number = 1, perPage: number = 5): Observable<Blog[]> {
    const apiUrl = `${this.baseUrl}?page=${page}&per_page=${perPage}&order=desc&status=publish`;
    console.log(apiUrl);
    return this.http.get<any[]>(apiUrl).pipe(
      map((posts) =>
        posts.map((post) => {
          const blog: Blog = {
            id: post.id,
            title: post.title.rendered,
            content: post.content.rendered,
            date: post.date,
            author: post.author, // You may want to fetch author details if necessary
            topic: post.topic, // Replace with real topic if available
            img: '', // Initialize as empty, will be populated later
          };

          // Fetch image URL if featured_media exists
          if (post.featured_media) {
            this.fetchImageUrl(post.featured_media).subscribe((imageUrl) => {
              blog.img = imageUrl; // Update img with the fetched URL
            });
          }
          return blog;
        })
      )
    );
  }

  // Method to fetch blogs with a dynamic page parameter
  getLatestBlogs(page: number = 1, perPage: number = 5): Observable<Blog[]> {
    const apiUrl = `${this.baseUrl}?page=${page}&per_page=${perPage}&order=desc&status=publish`;
    console.log(apiUrl);
    return this.http.get<any[]>(apiUrl).pipe(
      map((posts) =>
        posts.map((post) => {
          const blog: Blog = {
            id: post.id,
            title: post.title.rendered,
            content: post.content.rendered,
            date: post.date,
            author: post.author, // You may want to fetch author details if necessary
            topic: post.topic, // Replace with real topic if available
            img: '', // Initialize as empty, will be populated later
          };

          // Fetch image URL if featured_media exists
          if (post.featured_media) {
            this.fetchImageUrl(post.featured_media).subscribe((imageUrl) => {
              blog.img = imageUrl; // Update img with the fetched URL
            });
          }
          return blog;
        })
      )
    );
  }

  getBlogById(id: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.baseUrl}/${id}`);
  }

  getAuthorById(authorId: string): Observable<any> {
    // return this.http.get<any>(`/${authorId}`);
    return this.http.get<Blog>(`${this.authorUrl}/${authorId}`);
  }

  // API call to fetch the image URL by featured_media ID
  private fetchImageUrl(mediaId: number): Observable<string> {
    return this.http.get<any>(`${this.mediaApiUrl}/${mediaId}`).pipe(
      map((media) => media.source_url) // Extract the image URL from the response
    );
  }
}
