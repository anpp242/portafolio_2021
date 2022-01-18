import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() first;
  @Input() images;
  public customOptions: OwlOptions;
  activeSlides: SlidesOutputData;

  constructor() {
    this.customOptions = {
      loop: true,
      dots: true,
      items: 1,
      autoplay: false,
      mouseDrag: true,
      autoHeight: true,
      touchDrag: true,
      pullDrag: true,
      //navSpeed: 5000,
      autoplayHoverPause: true,
      navText: ['&#8249', '&#8250;'],
      responsive: {
        0: {
          items: 1,
          dots: true,
        },
        400: {
          items: 1,
          dots: true,
        },
        760: {
          items: 1,
          dots: true,
        },
        1000: {
          items: 1,
          dots: true,
        }
      },
      nav: false
    };
  }

  ngOnInit(): void {
    console.log(this.first)
  }

}
