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
      description: 'Battery Management System Software Compliance',
    },
    {
      id: '2',
      src: '/assets/imgs/smart-farming.jpg',
      alt: 'Placeholder Image 2',
      title: 'Smart Farming',
      description:
        'Leveraging Sensor Fusion and IoT for Agricultural Innovation',
    },
    {
      id: '3',
      src: '/assets/imgs/bms-2.jpg',
      alt: 'Placeholder Image 3',
      title: 'Embedded Systems',
      description: 'Battery Management Software for Electric Vehicles',
    },
    {
      id: '4',
      src: '/assets/imgs/farma-supply.jpg',
      alt: 'Placeholder Image 4',
      title: 'Web App',
      description: 'Pharma Supply Chain and Sales Optimization Web Application',
    },
  ];

  slidesStore2 = [
    {
      id: '1',
      src: '/assets/imgs/embeded-sys.jpg',
      alt: 'Placeholder Image 1',
      title: 'Embedded Systems',
      description: 'Smart Consumer Electronics',
    },
    {
      id: '2',
      src: '/assets/imgs/ed-tech-gamification.jpg',
      alt: 'Placeholder Image 2',
      title: 'Ed-tech',
      description: 'Custom LMS for Financial Literacy Education in Schools',
    },
    {
      id: '3',
      src: '/assets/imgs/ai-farm.jpg',
      alt: 'Placeholder Image 3',
      title: 'AI/Mchine Learning',
      description: 'AI-Powered Farm Animal Surveillance System',
    },
    {
      id: '4',
      src: '/assets/imgs/web-design.jpg',
      alt: 'Placeholder Image 4',
      title: 'Web',
      description: 'Custom Web Design Solutions',
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
