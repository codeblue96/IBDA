import { AfterViewInit, Component, HostListener } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
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

  ngAfterViewInit(): void {
    // For Carousel 1
    this.setupCarouselProgress(
      'carouselExampleCaptions1',
      'carouselProgressBar1'
    );
    // For Carousel 2
    this.setupCarouselProgress(
      'carouselExampleCaptions2',
      'carouselProgressBar2'
    );
  }

  // Function to handle each carousel's progress
  setupCarouselProgress(carouselId: string, progressBarId: string): void {
    const carousel = document.getElementById(carouselId);
    const progressBar = document.getElementById(progressBarId);
    if (carousel && progressBar) {
      const slides = carousel.querySelectorAll('.carousel-item');
      this.totalSlides = slides.length; // Count slides

      // Listen to the Bootstrap carousel's "next" and "prev" button clicks
      const nextButton = carousel.querySelector('.carousel-control-next');
      const prevButton = carousel.querySelector('.carousel-control-prev');

      // Handle the next button click
      if (nextButton) {
        nextButton.addEventListener('click', () => {
          this.updateProgressBar(carousel, slides, progressBar, 'next');
        });
      }

      // Handle the previous button click
      if (prevButton) {
        prevButton.addEventListener('click', () => {
          this.updateProgressBar(carousel, slides, progressBar, 'prev');
        });
      }

      // Initialize the progress bar on load
      this.updateProgressBar(carousel, slides, progressBar, 'init');
    }
  }

  // Function to update progress for the carousel
  updateProgressBar(
    carousel: HTMLElement,
    slides: NodeListOf<Element>,
    progressBar: HTMLElement,
    action: 'next' | 'prev' | 'init'
  ): void {
    const activeSlide = carousel.querySelector('.carousel-item.active'); // Active slide
    let activeIndex = Array.from(slides).indexOf(activeSlide!); // Index of the active slide

    // Handle "next" and "prev" actions
    if (action === 'next') {
      activeIndex = (activeIndex + 1) % this.totalSlides; // Move to the next slide
    } else if (action === 'prev') {
      activeIndex = (activeIndex - 1 + this.totalSlides) % this.totalSlides; // Move to the previous slide
    }

    // Update progress bar
    const progressPercentage = ((activeIndex + 1) / this.totalSlides) * 100;
    progressBar.style.width = `${progressPercentage}%`;
  }
}
