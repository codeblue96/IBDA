import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Blog, BlogService } from '../services/blog.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  LatestBlog,
  LatestBlogsService,
} from '../services/latest-blogs.service';

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
  blogs: Blog[] = [];
  latestBlogs: LatestBlog[] = [];
  isLoading = true;

  constructor(
    private blogService: BlogService,
    private latestBlogsService: LatestBlogsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.fetchBlogs();
    this.fetchLatestBlogs();
  }

  ngAfterViewInit(): void {
    this.setupCarousel('carouselExampleCaptions2');
  }

  fetchBlogs(): void {
    this.blogService.getBlogs().subscribe(
      (blogs) => {
        this.blogs = blogs.map((blog) => ({
          ...blog,
          sanitizedContent: this.sanitizer.bypassSecurityTrustHtml(
            blog.content
          ),
        }));
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching blogs', error);
        this.isLoading = false;
      }
    );
  }

  fetchLatestBlogs(): void {
    this.latestBlogsService.getLatestBlogs().subscribe(
      (blogs: LatestBlog[]) => {
        this.latestBlogs = blogs.map((blog: LatestBlog) => ({
          ...blog,
          sanitizedContent: this.sanitizeHtml(blog.content),
        }));
        this.isLoading = false;
        console.log(blogs);
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

  showBlogContent(blog: Blog): void {
    this.blogContent = this.sanitizeHtml(blog.content);
  }
}
