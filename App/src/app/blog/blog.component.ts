import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.setupCarousel('carouselExampleCaptions2');
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
}
