import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
  GlobalApiService,
  GlobalSlider,
} from '../../services/global-api.service';

@Component({
  selector: 'app-web-dev',
  standalone: true,
  imports: [CarouselModule, NgFor],
  templateUrl: './web-dev.component.html',
  styleUrl: './web-dev.component.css',
})
export class WebDevComponent {
  isLoading = true;
  sliderImgs: GlobalSlider[] = [];
  logos: string[] = [
    'assets/imgs/logos/company-1.png',
    'assets/imgs/logos/company-2.png',
    'assets/imgs/logos/company-3.png',
  ];

  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 45,
    navText: ['<', '>'],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 3 },
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
    navText: ['<', '>'],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 3 },
    },
    nav: true,
  };

  slidesStore: any[] = [];
  slidesStore2: any[] = [];

  constructor(private globalApiService: GlobalApiService) {}

  ngOnInit(): void {
    this.fetchSliderImages('services-web-mobile-app-development');
    this.fetchSliderImages('industries-web-mobile-app-development');
  }

  fetchSliderImages(category: string): void {
    this.isLoading = true;
    this.globalApiService.fetchSliderImageUrl(category).subscribe({
      next: (sliderImgs: GlobalSlider[]) => {
        // console.log(category);
        const slides = sliderImgs.map((img) => ({
          id: img.id,
          largeImg: img.largeImg,
          title: img.title || 'Untitled',
          description: img.desc || 'No description available',
          thumbnail: img.thumbnail,
        }));
        console.log(slides);
        // Conditionally store images based on category
        this.slidesStore2 = slides.slice(0, 4);
        if (category === 'industries-web-mobile-app-development') {
        } else if (category === 'services-web-mobile-app-development') {
          this.slidesStore = slides.slice(0, 4); // Or any other specific slice you need
        }

        // console.log(
        //   `Sanitized slider images for category ${category}:`,
        //   slides
        // );
      },
      error: (error) => {
        console.error('Error fetching slider images:', error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
