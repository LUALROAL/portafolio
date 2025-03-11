import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrix-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matrix-slider.component.html',
  styleUrl: './matrix-slider.component.scss'
})
export class MatrixSliderComponent implements OnInit, OnDestroy {
  slides: string[] = [
    'Wake up, Neo...',
    'The Matrix has you...',
    'Follow the white rabbit.',
    'Knock, knock, Neo.'
  ];

  currentIndex = 0;
  intervalId: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide() {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.nextSlide();
        });
      }, 3000); // 🔹 Cambia cada 3 segundos
    });
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
