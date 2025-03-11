import { CommonModule } from '@angular/common';
import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatrixSliderService } from '../../../services/matrix/matrix-slider.service';

@Component({
  selector: 'app-matrix-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matrix-slider.component.html',
  styleUrl: './matrix-slider.component.scss'
})
export class MatrixSliderComponent implements OnInit, OnDestroy {
  @ViewChild('audioElement') audioElement!: ElementRef<HTMLAudioElement>;
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


  ngAfterViewInit() {
  if (this.audioElement?.nativeElement) {
    const audio = this.audioElement.nativeElement;
    audio.volume = 0; // Inicia sin sonido
    audio.play().catch(error => console.warn("Reproducción bloqueada", error));

    let vol = 0;
    const fadeAudio = setInterval(() => {
      if (vol < 1) {
        vol += 0.05; // Incrementa volumen gradualmente
        audio.volume = vol;
      } else {
        clearInterval(fadeAudio);
      }
    }, 200); // Ajusta la velocidad del fade-in
  }
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
