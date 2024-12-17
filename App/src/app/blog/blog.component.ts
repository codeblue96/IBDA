import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Blog, BlogService } from '../services/blog.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements AfterViewInit, OnInit {
  // SafeHtml property for the selected blog content
  blogContent: SafeHtml | null = null;

  // Array to hold the blog data fetched from the API
  blogs: Blog[] = [];

  // Boolean to track the loading state of the blogs
  isLoading = true;

  // Injecting the BlogService and DomSanitizer
  constructor(
    private blogService: BlogService,
    private sanitizer: DomSanitizer
  ) {}

  // Lifecycle hook that runs once when the component is initialized
  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(
      (blogs) => {
        this.blogs = blogs.map((blog) => ({
          ...blog,
          sanitizedContent: this.sanitizer.bypassSecurityTrustHtml(
            blog.content
          ), // Sanitize HTML
        }));
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching blogs', error);
        this.isLoading = false;
      }
    );
  }

  // Lifecycle hook that runs after the component's view is initialized
  ngAfterViewInit(): void {
    // Setup carousel functionality for the specified carousel ID
    this.setupCarousel('carouselExampleCaptions2');
  }

  // Helper method to add event listeners to carousel navigation buttons
  setupCarousel(carouselId: string): void {
    // Find the carousel element by its ID
    const carousel = document.getElementById(carouselId);
    if (carousel) {
      // Find the "Next" button in the carousel
      const nextButton = carousel.querySelector('.carousel-control-next');
      // Find the "Previous" button in the carousel
      const prevButton = carousel.querySelector('.carousel-control-prev');

      // Add a click event listener to the "Next" button
      if (nextButton) {
        nextButton.addEventListener('click', () => {
          console.log('Next button clicked'); // Debug log for button click
        });
      }
      // Add a click event listener to the "Previous" button
      if (prevButton) {
        prevButton.addEventListener('click', () => {
          console.log('Previous button clicked'); // Debug log for button click
        });
      }
    }
  }

  // Sanitize HTML content to render safely
  sanitizeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  // Display a specific blog's content
  showBlogContent(blog: Blog): void {
    this.blogContent = this.sanitizeHtml(blog.content);
  }
}
