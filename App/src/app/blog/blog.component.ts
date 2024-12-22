import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GlobalApiService, GlobalBlogs } from '../services/global-api.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements AfterViewInit, OnInit {
  blogContent: SafeHtml | null = null;
  latestBlogContent: SafeHtml | null = null;
  latestBlogs: GlobalBlogs[] = [];
  blogs: GlobalBlogs[] = [];
  isLoading = true;
  currentPage = 1; // Track the current page

  constructor(
    private globalApiService: GlobalApiService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.fetchBlogs(this.currentPage); // Fetch blogs for the current page
    this.fetchLatestBlogs(1, 3); // Fetch blogs for the current page
    // this.fetchLatestBlogs();
  }

  ngAfterViewInit(): void {
    this.setupCarousel('carouselExampleCaptions2');
  }

  fetchBlogs(page: number, perPage: number = 5): void {
    this.isLoading = true; // Show loading indicator
    this.globalApiService.getBlogs(page, perPage).subscribe(
      (blogs) => {
        this.blogs = blogs.map((blog) => ({
          ...blog,
          sanitizedContent: this.sanitizer.bypassSecurityTrustHtml(
            blog.content
          ),
        }));
        this.isLoading = false; // Hide loading indicator
        console.log(blogs);
      },
      (error) => {
        console.error('Error fetching blogs', error);
        this.isLoading = false;
      }
    );
  }

  fetchLatestBlogs(page: number, perPage: number = 5): void {
    this.isLoading = true;
    this.globalApiService.getLatestBlogs(page, perPage).subscribe(
      async (blogs: GlobalBlogs[]) => {
        const enrichedBlogs = await Promise.all(
          blogs.map(async (blog: GlobalBlogs) => {
            const authorDetails = await this.globalApiService
              .getAuthorById(blog.author)
              .toPromise();
            return {
              ...blog,
              author: authorDetails, // Replace author ID with full author details
              sanitizedContent: this.sanitizeHtml(blog.content),
            };
          })
        );
        console.log(enrichedBlogs);
        this.latestBlogs = enrichedBlogs;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching latest blogs:', error);
        this.isLoading = false;
      }
    );
  }

  setupCarousel(carouselId: string): void {
    const carousel = document.getElementById(carouselId);
    if (carousel) {
      const nextButton = carousel.querySelector('.carousel-control-next');
      const prevButton = carousel.querySelector('.carousel-control-prev');

      if (nextButton) {
        nextButton.addEventListener('click', () => {
          console.log('Next button clicked');
        });
      }
      if (prevButton) {
        prevButton.addEventListener('click', () => {
          console.log('Previous button clicked');
        });
      }
    }
  }

  sanitizeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  showBlogContent(blog: GlobalBlogs): void {
    this.blogContent = this.sanitizeHtml(blog.content);
  }

  // Method to load the next page of blogs
  loadNextPage(): void {
    this.currentPage++;
    this.fetchBlogs(this.currentPage);
  }

  // Method to load the previous page of blogs
  loadPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchBlogs(this.currentPage);
    }
  }
}
