import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, OnInit, ElementRef, Renderer2, HostListener, OnDestroy, Inject, PLATFORM_ID } from "@angular/core";
import { MatrixSliderComponent } from "../matrix-slider/matrix-slider.component";
import { trigger, transition, animate, style } from "@angular/animations";


@Component({
  selector: 'app-app-matrix-background',
  standalone: true,
  imports: [CommonModule, MatrixSliderComponent],
  templateUrl: './app-matrix-background.component.html',
  styleUrl: './app-matrix-background.component.scss',
})
export class AppMatrixBackgroundComponent {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private drops: number[] = [];
  private columns!: number;
  private characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZあいうえおカキクケコ'; // Letras tipo Matrix
  private fontSize = 16;
  private cursorX = 0;
  private cursorY = 0;
  private isBrowser: boolean;

  isVisible = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId); // Verifica si está en el navegador
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return; // Evita ejecución en SSR

    this.canvas = document.getElementById('matrixCanvas') as HTMLCanvasElement;
    if (!this.canvas) return; // Evita errores si el elemento no se encuentra

    this.ctx = this.canvas.getContext('2d')!;
    this.resizeCanvas();
    this.initializeDrops();
    this.animateMatrix();
  }

  @HostListener('window:resize')
  resizeCanvas() {
    if (!this.isBrowser) return;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.columns = Math.floor(this.canvas.width / this.fontSize);
    this.drops = Array(this.columns).fill(1);
  }

  @HostListener('mousemove', ['$event'])
  updateCursor(event: MouseEvent) {
    if (!this.isBrowser) return;

    this.cursorX = event.clientX;
    this.cursorY = event.clientY;
  }

  private initializeDrops() {
    this.drops = Array(this.columns).fill(1);
  }

  private animateMatrix() {
    if (!this.isBrowser) return;

    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = '#0F0'; // Color verde Matrix
    this.ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.drops.length; i++) {
      const text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;

      // Hacer más brillante cerca del cursor
      const distance = Math.hypot(this.cursorX - x, this.cursorY - y);
      const brightness = Math.max(0.3, 1 - distance / 200); // Ajustar intensidad

      this.ctx.fillStyle = `rgba(0, 255, 0, ${brightness})`;
      this.ctx.fillText(text, x, y);

      if (y > this.canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }

    requestAnimationFrame(() => this.animateMatrix());
  }


}
