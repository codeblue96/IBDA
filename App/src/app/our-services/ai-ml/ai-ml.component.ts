import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-ai-ml',
  standalone: true,
  imports: [CarouselModule, NgFor],
  templateUrl: './ai-ml.component.html',
  styleUrl: './ai-ml.component.css',
})
export class AiMlComponent {
  slidesStore = [
    {
      id: '1',
      src: '/assets/imgs/llms5.jpg',
      alt: 'Placeholder Image 1',
      title: 'LLMs',
      description: '',
    },
    {
      id: '2',
      src: '/assets/imgs/chatbot.jpg',
      alt: 'Placeholder Image 2',
      title: 'Chatbots',
      description: '',
    },
    {
      id: '3',
      src: '/assets/imgs/ComputerVision.jpg',
      alt: 'Placeholder Image 3',
      title: 'Computer Vision',
      description: '',
    },
    {
      id: '4',
      src: '/assets/imgs/automation.jpg',
      alt: 'Placeholder Image 4',
      title: 'Automation',
      description: '',
    },
    {
      id: '5',
      src: '/assets/imgs/sensor-fusion2.jpg',
      alt: 'Placeholder Image 4',
      title: 'Sensor Fusion',
      description: '',
    },
    {
      id: '6',
      src: '/assets/imgs/edge-ai.jpg',
      alt: 'Placeholder Image 4',
      title: 'Edge AI',
      description: '',
    },
  ];
  slidesStore2 = [
    {
      id: '1',
      src: '/assets/imgs/agri-tech.jpg',
      alt: 'Placeholder Image 1',
      title: 'Agriculture Tech (AgriTech)',
      description: '',
    },
    {
      id: '2',
      src: '/assets/imgs/green-tech.jpg',
      alt: 'Placeholder Image 2',
      title: 'Green Energy',
      description: '',
    },
    {
      id: '3',
      src: '/assets/imgs/fintech112.jpg',
      alt: 'Placeholder Image 3',
      title: 'FinTech',
      description: '',
    },
    {
      id: '4',
      src: '/assets/imgs/ed-tech34.jpg',
      alt: 'Placeholder Image 4',
      title: 'EdTech',
      description: '',
    },
    {
      id: '4',
      src: '/assets/imgs/medical-devices2.jpg',
      alt: 'Placeholder Image 4',
      title: 'Medical Devices',
      description: '',
    },
    {
      id: '4',
      src: '/assets/imgs/avionics.jpg',
      alt: 'Placeholder Image 4',
      title: 'Avionics',
      description: '',
    },
    {
      id: '4',
      src: '/assets/imgs/automotive-embedd.jpg',
      alt: 'Placeholder Image 4',
      title: 'Automotive',
      description: '',
    },
    {
      id: '4',
      src: '/assets/imgs/power-industry.jpg',
      alt: 'Placeholder Image 4',
      title: 'Energy',
      description: '',
    },
    {
      id: '4',
      src: '/assets/imgs/healthcare.jpg',
      alt: 'Placeholder Image 4',
      title: 'Healthcare',
      description: '',
    },
    {
      id: '4',
      src: '/assets/imgs/Logistics3.jpg',
      alt: 'Placeholder Image 4',
      title: 'Logistics & Transportation',
      description: '',
    },
    {
      id: '4',
      src: '/assets/imgs/entertainment11.jpg',
      alt: 'Placeholder Image 4',
      title: 'Entertainment & Media',
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
