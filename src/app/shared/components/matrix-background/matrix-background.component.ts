import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';

import { MatrixSliderComponent } from '../matrix-slider/matrix-slider.component';

/**
 * Fondo con el efecto "Matrix" (lluvia de caracteres) más el slider de entrada.
 */
@Component({
  selector: 'app-matrix-background',
  imports: [MatrixSliderComponent],
  templateUrl: './matrix-background.component.html',
  styleUrl: './matrix-background.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatrixBackgroundComponent implements AfterViewInit, OnDestroy {
  private readonly ngZone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);

  @ViewChild('matrixCanvas') private canvasRef?: ElementRef<HTMLCanvasElement>;

  private ctx?: CanvasRenderingContext2D | null;
  private animationFrameId?: number;
  private drops: number[] = [];
  private columns = 0;
  private cursorX = 0;
  private cursorY = 0;

  private readonly characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZあいうえおカキクケコ';
  private readonly fontSize = 16;

  private teardownListeners: Array<() => void> = [];

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) {
      return;
    }

    this.ctx = canvas.getContext('2d');
    if (!this.ctx) {
      return;
    }

    this.resizeCanvas();
    this.registerListeners();
    this.startAnimationLoop();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== undefined) {
      cancelAnimationFrame(this.animationFrameId);
    }

    this.teardownListeners.forEach((teardown) => teardown());
    this.teardownListeners = [];
  }

  private registerListeners(): void {
    // Los listeners se registran fuera de la zona de Angular: `mousemove` y
    // `resize` se disparan con mucha frecuencia y no deben disparar un ciclo
    // de detección de cambios por cada evento.
    this.ngZone.runOutsideAngular(() => {
      const onMouseMove = (event: MouseEvent): void => {
        this.cursorX = event.clientX;
        this.cursorY = event.clientY;
      };
      const onResize = (): void => this.resizeCanvas();

      document.addEventListener('mousemove', onMouseMove, { passive: true });
      window.addEventListener('resize', onResize);

      this.teardownListeners.push(
        () => document.removeEventListener('mousemove', onMouseMove),
        () => window.removeEventListener('resize', onResize),
      );
    });
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) {
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.columns = Math.floor(canvas.width / this.fontSize);
    this.drops = Array(this.columns).fill(1);
  }

  private startAnimationLoop(): void {
    // El bucle de animación se ejecuta fuera de la zona de Angular. Dentro de
    // la zona, la tarea pendiente de `requestAnimationFrame` mantiene la
    // aplicación inestable y la hidratación (NG0506) nunca se completa.
    this.ngZone.runOutsideAngular(() => {
      const animate = (): void => {
        this.draw();
        this.animationFrameId = requestAnimationFrame(animate);
      };

      this.animationFrameId = requestAnimationFrame(animate);
    });
  }

  private draw(): void {
    const ctx = this.ctx;
    const canvas = this.canvasRef?.nativeElement;
    if (!ctx || !canvas) {
      return;
    }

    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F';
    ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.drops.length; i++) {
      const text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;

      // Cuanto más cerca del cursor, más brillante.
      const distance = Math.hypot(this.cursorX - x, this.cursorY - y);
      const brightness = Math.max(0.3, 1 - distance / 200);

      ctx.fillStyle = `rgba(0, 255, 0, ${brightness})`;
      ctx.fillText(text, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
  }
}
