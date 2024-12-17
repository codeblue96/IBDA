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
      src: '/assets/imgs/e-commerce.jpg',
      alt: 'Placeholder Image 1',
      title: 'E-Commerce',
      description: '',
    },
    {
      id: '2',
      src: '/assets/imgs/healthcare4.jpg',
      alt: 'Placeholder Image 2',
      title: 'Healthcare',
      description: '',
    },
    {
      id: '3',
      src: '/assets/imgs/finance3.jpg',
      alt: 'Placeholder Image 3',
      title: 'Finance',
      description: '',
    },
    {
      id: '4',
      src: '/assets/imgs/Entertainment.jpg',
      alt: 'Placeholder Image 4',
      title: 'Entertainment',
      description: '',
    },
    {
      id: '5',
      src: '/assets/imgs/edu-2.jpg',
      alt: 'Placeholder Image 4',
      title: 'Education',
      description: '',
    },
    {
      id: '6',
      src: '/assets/imgs/SaaS2.jpg',
      alt: 'Placeholder Image 4',
      title: 'SaaS Platforms',
      description: '',
    },
    {
      id: '7',
      src: '/assets/imgs/crm3.jpg',
      alt: 'Placeholder Image 4',
      title: 'CRM & ERP',
      description: '',
    },
    {
      id: '8',
      src: '/assets/imgs/fintech.jpg',
      alt: 'Placeholder Image 4',
      title: 'FinTech',
      description: '',
    },
    {
      id: '9',
      src: '/assets/imgs/logistics-1.jpg',
      alt: 'Placeholder Image 4',
      title: 'Logistics',
      description: '',
    },
    {
      id: '10',
      src: '/assets/imgs/Hospitality.jpg',
      alt: 'Placeholder Image 4',
      title: 'Hospitality',
      description: '',
    },
  ];
  slidesStore2 = [
    {
      id: '1',
      src: '/assets/imgs/iOS dev2.jpg',
      alt: 'Placeholder Image 1',
      title: 'iOS',
      description: '',
    },
    {
      id: '2',
      src: '/assets/imgs/android3.jpg',
      alt: 'Placeholder Image 2',
      title: 'Android',
      description: '',
    },
    {
      id: '3',
      src: '/assets/imgs/cross-palatform.jpg',
      alt: 'Placeholder Image 3',
      title: 'CrossPlatform',
      description: '',
    },
    {
      id: '4',
      src: '/assets/imgs/pwa.jpg',
      alt: 'Placeholder Image 4',
      title: 'PWAs (Progressive Web Apps)',
      description: '',
    },
    {
      id: '5',
      src: '/assets/imgs/uiux5.jpg',
      alt: 'Placeholder Image 4',
      title: 'UI/UX Design',
      description: '',
    },
    {
      id: '6',
      src: '/assets/imgs/Fullstack.jpg',
      alt: 'Placeholder Image 4',
      title: 'Full-Stack Development',
      description: '',
    },
    {
      id: '7',
      src: '/assets/imgs/web (2).jpg',
      alt: 'Placeholder Image 4',
      title: 'Custom Web Apps',
      description: '',
    },
    {
      id: '8',
      src: '/assets/imgs/web development.jpg',
      alt: 'Placeholder Image 4',
      title: 'Desktop Apps',
      description: '',
    },
    {
      id: '9',
      src: '/assets/imgs/Cloud.png',
      alt: 'Placeholder Image 4',
      title: 'Cloud Apps',
      description: '',
    },
  ];

  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 45,
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
    margin: 45,
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
