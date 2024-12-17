import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-embedded',
  standalone: true,
  imports: [CarouselModule, NgFor],
  templateUrl: './embedded.component.html',
  styleUrl: './embedded.component.css',
})
export class EmbeddedComponent {
  slidesStore = [
    {
      id: '1',
      src: '/assets/imgs/automotive-embedded.png',
      alt: 'Placeholder Image 1',
      title: 'Automotive Embedded',
      description: '',
    },
    {
      id: '2',
      src: '/assets/imgs/avionics.jpg',
      alt: 'Placeholder Image 2',
      title: 'Avionics',
      description: '',
    },
    {
      id: '3',
      src: '/assets/imgs/medical-devices.png',
      alt: 'Placeholder Image 3',
      title: 'Medical Devices',
      description: '',
    },
    {
      id: '4',
      src: '/assets/imgs/bms12.png',
      alt: 'Placeholder Image 4',
      title: 'BMS',
      description: '',
    },
    {
      id: '5',
      src: '/assets/imgs/IIOT.png',
      alt: 'Placeholder Image 4',
      title: 'IIoT',
      description: '',
    },
  ];
  slidesStore2 = [
    {
      id: '1',
      src: '/assets/imgs/embeddeds.jpg',
      alt: 'Placeholder Image 1',
      title: 'Microcontrollers Programming',
      description: '',
    },
    {
      id: '2',
      src: '/assets/imgs/RTOS.jpg',
      alt: 'Placeholder Image 2',
      title: 'RTOS',
      description: '',
    },
    {
      id: '3',
      src: '/assets/imgs/Embedded-linux.jpg',
      alt: 'Placeholder Image 3',
      title: 'Embedded Linux',
      description: '',
    },
    {
      id: '4',
      src: '/assets/imgs/SOC.jpg',
      alt: 'Placeholder Image 4',
      title: 'SoC Development',
      description: '',
    },
    {
      id: '5',
      src: '/assets/imgs/ROS2.jpg',
      alt: 'Placeholder Image 4',
      title: 'ROS',
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
