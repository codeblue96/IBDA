import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalApiService } from '../services/global-api.service'; // Assuming your API service is here
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-blog-reading',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './blog-reading.component.html',
  styleUrls: ['./blog-reading.component.css'],
})
export class BlogReadingComponent implements OnInit {
  blog: any; // Store the blog data
  blogContent: SafeHtml | null = null;
  readTime: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private globalApiService: GlobalApiService,
    private sanitizer: DomSanitizer
  ) {}
  calculateReadingTime(content: string): string {
    // Check if content is a valid string

    // Remove HTML tags and get the text content
    const readableContent = this.stripHtmlTags(content);

    if (typeof readableContent !== 'string') {
      return 'Invalid content';
    }

    const averageReadingSpeed = 200; // Average words per minute
    const wordCount = this.countWords(readableContent);
    const readingTimeInMinutes = Math.ceil(wordCount / averageReadingSpeed);

    return `${readingTimeInMinutes} `;
  }

  private stripHtmlTags(content: string): string {
    // Create a temporary element to parse the content and extract text
    const doc = new DOMParser().parseFromString(content, 'text/html');
    return doc.body.textContent || ''; // Get the text content of the parsed HTML
  }

  private countWords(text: string): number {
    // Ensure the text is a string and handle potential edge cases
    if (typeof text !== 'string') {
      return 0;
    }

    return text.trim().split(/\s+/).length;
  }

  ngOnInit(): void {
    // Fetch blog ID from the URL params
    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      this.fetchBlog(blogId);
    }
  }

  fetchBlog(blogId: string): void {
    // Fetch the blog by its ID
    this.globalApiService.getBlogById(blogId).subscribe(
      (blogData) => {
        this.blog = blogData;
        console.log(blogData);
        this.blogContent = this.sanitizeHtml(blogData.content); // Sanitize the content for display
        this.readTime = this.calculateReadingTime(blogData.content);
      },
      (error) => {
        console.error('Error fetching blog:', error);
      }
    );
  }

  sanitizeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
