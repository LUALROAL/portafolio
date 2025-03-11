import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { MatrixSliderService } from '../../../services/matrix/matrix-slider.service';

@Component({
  selector: 'app-matrix-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matrix-slider.component.html',
  styleUrl: './matrix-slider.component.scss'
})
export class MatrixSliderComponent implements OnInit, OnDestroy {
  slides: string[] = [
    'The choice is yours 💊...',
    'Wake up, Neo...',
    'The Matrix has you...',
    'Follow the white rabbit.',
    'Knock, knock, Neo.'
  ];

  currentIndex = 0;
  intervalId: any;

  constructor(private ngZone: NgZone,
    private matrixSliderService: MatrixSliderService) { }

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
      }, 7000); // 🔹 Cambia cada 3 segundos
    });
  }

  enterMatrix() {
    this.matrixSliderService.enterMatrix();
  }


  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
