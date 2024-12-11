import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

// Interface for Blog data
export interface Blog {
  id: number;
  title: string;
  content: string;
  img: string; // Image URL
  date: string; // Date when the blog was published
  author: string; // Author of the blog
  topic: string; // The topic/category of the blog
}
@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl =
    'https://wp.ibda.dev/wp-json/wp/v2/posts?page=1&per_page=5&order=desc&status=publish&offset=3'; // API endpoint for blogs
  private mediaApiUrl = 'https://wp.ibda.dev/wp-json/wp/v2/media'; // API endpoint for media
  constructor(private http: HttpClient) {}

  // Method to fetch blogs
  getBlogs(): Observable<Blog[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((posts) =>
        posts.map((post) => {
          const blog: Blog = {
            id: post.id,
            title: post.title.rendered,
            content: post.content.rendered,
            date: post.date,
            author: post.author, // You may want to fetch author details if necessary
            topic: 'Default Topic', // Replace with real topic if available
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
  // API call to fetch the image URL by featured_media ID
  private fetchImageUrl(mediaId: number): Observable<string> {
    return this.http.get<any>(`${this.mediaApiUrl}/${mediaId}`).pipe(
      map((media) => media.source_url) // Extract the image URL from the response
    );
  }
}
