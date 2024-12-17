import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-ed-tech',
  standalone: true,
  imports: [CarouselModule, NgFor],
  templateUrl: './ed-tech.component.html',
  styleUrl: './ed-tech.component.css',
})
export class EdTechComponent {
  slidesStore = [
    {
      id: '1',
      src: '/assets/imgs/ed-tech-sec.jpg',
      alt: 'Placeholder Image 1',
      title: 'Education Sector',
      description: '',
    },
    {
      id: '2',
      src: '/assets/imgs/Corporate-learning.jpg',
      alt: 'Placeholder Image 2',
      title: 'Corporate Training',
      description: '',
    },
    {
      id: '3',
      src: '/assets/imgs/govt.png',
      alt: 'Placeholder Image 3',
      title: 'Government & Public Sector',
      description: '',
    },
    {
      id: '4',
      src: '/assets/imgs/NGO.jpg',
      alt: 'Placeholder Image 4',
      title: 'NGOs & Nonprofits',
      description: '',
    },
  ];

  slidesStore2 = [
    {
      id: '1',
      src: '/assets/imgs/LMS.jpg',
      alt: 'Placeholder Image 1',
      title: 'LMS Development & Customization',
      description: '',
    },
    {
      id: '2',
      src: '/assets/imgs/gamified.jpg',
      alt: 'Placeholder Image 2',
      title: 'Gamified Learning Solutions',
      description: '',
    },
    {
      id: '3',
      src: '/assets/imgs/mlearning3.jpg',
      alt: 'Placeholder Image 4',
      title: 'Mobile Learning (mLearning)',
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
