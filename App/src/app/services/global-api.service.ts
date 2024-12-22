import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { SafeHtml } from '@angular/platform-browser';

// Interface for Blog data
export interface GlobalBlogs {
  id: number;
  title: string;
  content: string;
  img: string; // Image URL
  date: string; // Date when the blog was published
  author: string;
  author_name: string;
  topic: string; // The topic/category of the blog
  sanitizedContent?: SafeHtml;
}

@Injectable({
  providedIn: 'root',
})
export class GlobalApiService {
  mainUrl: string = 'https://wp.ibda.dev';

  private baseUrl = this.mainUrl + '/wp-json/wp/v2/posts'; // Base API URL
  private authorUrl = this.mainUrl + '/wp-json/wp/v2/users'; // Author API URL
  private mediaApiUrl = this.mainUrl + '/wp-json/wp/v2/media'; // Media API URL

  constructor(private http: HttpClient) {}

  // Fetch blogs with a dynamic page parameter
  getBlogs(page: number = 1, perPage: number = 5): Observable<GlobalBlogs[]> {
    const apiUrl = `${this.baseUrl}?page=${page}&per_page=${perPage}&order=desc&status=publish`;
    console.log(apiUrl);
    return this.http
      .get<any[]>(apiUrl)
      .pipe(map((posts) => posts.map((post) => this.processPost(post))));
  }

  // Fetch latest blogs (uses the same API as getBlogs)
  getLatestBlogs(
    page: number = 1,
    perPage: number = 5
  ): Observable<GlobalBlogs[]> {
    return this.getBlogs(page, perPage);
  }

  // Fetch a single blog by ID
  getBlogById(id: string): Observable<GlobalBlogs> {
    return this.http.get<GlobalBlogs>(`${this.baseUrl}/${id}`);
  }

  // Fetch author by ID
  getAuthorById(authorId: string): Observable<any> {
    return this.http.get<any>(`${this.authorUrl}/${authorId}`);
  }

  // Fetch category by ID
  getCategoryById(categoryId: string): Observable<any> {
    return this.http.get<any>(`${this.authorUrl}/${categoryId}`);
  }

  // Fetch the image URL by featured_media ID
  private fetchImageUrl(mediaId: number): Observable<string> {
    return this.http.get<any>(`${this.mediaApiUrl}/${mediaId}`).pipe(
      map((media) => media.source_url) // Extract the image URL from the response
    );
  }

  // Helper method to process a single post
  private processPost(post: any): GlobalBlogs {
    const blog: GlobalBlogs = {
      id: post.id,
      title: post.title.rendered,
      content: post.content.rendered,
      date: post.date,
      author: post.author,
      author_name: post.author_name, // Will be updated later
      topic: post.topic || '', // Replace with real topic if available
      img: '', // Will be updated later
    };

    // Fetch the image URL if featured_media exists
    if (post.featured_media) {
      this.fetchImageUrl(post.featured_media).subscribe((imageUrl) => {
        blog.img = imageUrl;
      });
    }

    // Fetch the author name if author ID exists
    if (post.author) {
      this.getAuthorById(post.author).subscribe((author) => {
        blog.author_name = author.name; // Assuming the 'name' property exists
      });
    }

    return blog;
  }
}
