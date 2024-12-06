import { Component, HostListener } from '@angular/core';
import { NgFor } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 100) {
      // Check if the scroll position is greater than 100px
      // alert('You have scrolled more than 100px!');
    }
  }
  logos: string[] = [
    'assets/imgs/logos/company-1.png',
    'assets/imgs/logos/company-2.png',
    'assets/imgs/logos/company-3.png',
  ];
  totalSlides: number = 0;
  currentSlideIndex: number = 0; // Track the current slide index
  progressBar: HTMLElement | null = null;

  slidesStore = [
    {
      id: '1',
      src: '/assets/imgs/test-1.jpg',
      alt: 'Placeholder Image 1',
      title: 'Beautiful Landscape',
    },
    {
      id: '2',
      src: '/assets/imgs/test-1.jpg',
      alt: 'Placeholder Image 2',
      title: 'City at Night',
    },
    {
      id: '3',
      src: '/assets/imgs/test-1.jpg',
      alt: 'Placeholder Image 3',
      title: 'Mountain View',
    },
    {
      id: '4',
      src: '/assets/imgs/test-1.jpg',
      alt: 'Placeholder Image 4',
      title: 'Ocean Horizon',
    },
  ];

  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 100,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 100,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };
}
