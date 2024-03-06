import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterViewInit {
  slideIndex = 1;

  constructor() {}

  ngAfterViewInit() {
    this.showSlides(this.slideIndex, 'mySlides');
    this.showSlides(this.slideIndex, 'hotelSlides');
  }

  plusSlides(n: number, className: string) {
    this.showSlides(this.slideIndex += n, className);
  }

  currentSlide(n: number, className: string) {
    this.showSlides(this.slideIndex = n, className);
  }

  showSlides(n: number, className: string) {
    let i;
    const slides = document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[this.slideIndex - 1].style.display = 'block';
  }
}
