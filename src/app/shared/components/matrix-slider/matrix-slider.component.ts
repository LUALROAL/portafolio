import { ChangeDetectionStrategy, Component, NgZone, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { PORTFOLIO_URL } from '../../../core/site-links';
import { MatrixSliderService } from '../../../services/matrix/matrix-slider.service';

@Component({
  selector: 'app-matrix-slider',
  imports: [],
  templateUrl: './matrix-slider.component.html',
  styleUrl: './matrix-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatrixSliderComponent implements OnInit, OnDestroy {
  private readonly ngZone = inject(NgZone);
  private readonly matrixSliderService = inject(MatrixSliderService);

  readonly slides = [
    'La elección es tuya 💊...',
    'Despierta, Neo...',
    'Matrix te tiene...',
    'Sigue al conejo blanco.',
    'Toc, toc, Neo.',
  ];

  readonly currentIndex = signal(0);

  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
    }
  }

  /** Cambia de frase cada 7 segundos. */
  private startAutoSlide(): void {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => this.nextSlide());
      }, 7000);
    });
  }

  enterMatrix(): void {
    this.matrixSliderService.enterMatrix();
  }

  nextSlide(): void {
    this.currentIndex.update((index) => (index + 1) % this.slides.length);
  }

  goSite(): void {
    window.open(PORTFOLIO_URL, '_blank', 'noopener');
  }
}
