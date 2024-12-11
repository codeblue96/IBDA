import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-web-dev',
  standalone: true,
  imports: [CarouselModule, NgFor],
  templateUrl: './web-dev.component.html',
  styleUrl: './web-dev.component.css',
})
export class WebDevComponent {
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
        items: 4,
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
        items: 4,
      },
    },
    nav: true,
  };
}
