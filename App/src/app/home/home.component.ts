import { Component } from '@angular/core';
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
  logos: string[] = [
    'assets/imgs/logos/company-1.png',
    'assets/imgs/logos/company-2.png',
    'assets/imgs/logos/company-3.png',
  ];

  slidesStore = [
    {
      id: '1',
      src: '/assets/imgs/bms.jpg',
      alt: 'Placeholder Image 1',
      title: 'Embedded Systems',
      description: 'Battery Management System Software Compliance.',
    },
    {
      id: '2',
      src: '/assets/imgs/test-1.jpg',
      alt: 'Placeholder Image 2',
      title: 'City at Night',
      description: 'This is the description for Story 3.',
    },
    {
      id: '3',
      src: '/assets/imgs/test-1.jpg',
      alt: 'Placeholder Image 3',
      title: 'Mountain View',
      description: 'This is the description for Story 3.',
    },
    {
      id: '4',
      src: '/assets/imgs/test-1.jpg',
      alt: 'Placeholder Image 4',
      title: 'Ocean Horizon',
      description: 'This is the description for Story 3.',
    },
  ];

  slidesStore2 = [
    {
      id: '1',
      src: '/assets/imgs/consumer-elec.jpg',
      alt: 'Placeholder Image 1',
      title: 'Embedded Systems',
      description: 'Battery Management System Software Compliance.',
    },
    {
      id: '2',
      src: '/assets/imgs/img-recog.jpg',
      alt: 'Placeholder Image 2',
      title: 'City at Night',
      description: 'This is the description for Story 3.',
    },
    {
      id: '3',
      src: '/assets/imgs/micro-cont.jpg',
      alt: 'Placeholder Image 3',
      title: 'Mountain View',
      description: 'This is the description for Story 3.',
    },
    {
      id: '4',
      src: '/assets/imgs/test-1.jpg',
      alt: 'Placeholder Image 4',
      title: 'Ocean Horizon',
      description: 'This is the description for Story 3.',
    },
  ];

  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 85,
    // autoplay: true,
    // autoplayTimeout: 5000,
    // autoplayHoverPause: true,
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
    margin: 85,
    // autoplay: true,
    // autoplayTimeout: 5000,
    // autoplayHoverPause: true,
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
