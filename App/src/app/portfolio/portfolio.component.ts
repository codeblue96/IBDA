import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GlobalApiService, GlobalBlogs } from '../services/global-api.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements AfterViewInit, OnInit {
  blogContent: SafeHtml | null = null;
  latestBlogContent: SafeHtml | null = null;
  latestBlogs: GlobalBlogs[] = [];
  blogs: GlobalBlogs[] = [];
  blogsPerPage: number = 5; // Adjust based on how many blogs you want per page.
  isLoading = true;
  totalPages: number[] = []; // Array representing the page numbers.
  currentPage = 1;

  constructor(
    private globalApiService: GlobalApiService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.fetchBlogs(this.currentPage);
    this.fetchLatestBlogs(1, 3);
  }

  ngAfterViewInit(): void {
    this.setupCarousel('carouselExampleCaptions2');
  }

  fetchBlogs(page: number, perPage: number = 5): void {
    this.isLoading = true;
    this.globalApiService.getBlogs(page, perPage).subscribe(
      (blogs) => {
        this.blogs = blogs.map((blog) => ({
          ...blog,
          sanitizedContent: this.sanitizer.bypassSecurityTrustHtml(
            blog.content
          ),
        }));
        this.isLoading = false;
        // console.log(blogs);
      },
      (error) => {
        console.error('Error fetching blogs:', error);
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
              author: authorDetails,
              sanitizedContent: this.sanitizeHtml(blog.content),
            };
          })
        );
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
      carousel
        .querySelector('.carousel-control-next')
        ?.addEventListener('click', () => console.log('Next button clicked'));
      carousel
        .querySelector('.carousel-control-prev')
        ?.addEventListener('click', () =>
          console.log('Previous button clicked')
        );
    }
  }

  sanitizeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  showBlogContent(blog: GlobalBlogs): void {
    this.blogContent = this.sanitizeHtml(blog.content);
  }

  loadNextPage(): void {
    this.currentPage++;
    this.fetchBlogs(this.currentPage);
  }

  loadPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchBlogs(this.currentPage);
    }
  }
}
