import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./shared/components/nav-bar/nav-bar.component";
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from "./shared/components/header/header.component";
import { AboutComponent } from './components/about/about.component';
import { AppMatrixBackgroundComponent } from './shared/components/app-matrix-background/app-matrix-background.component';
import { isPlatformBrowser } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,AboutComponent, SkillsComponent, ProjectsComponent, AppMatrixBackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portafolio';

   private canvas!: HTMLCanvasElement;
    private context!: CanvasRenderingContext2D | null;
    private animationFrameId: number = 0;
    private textStrip = ['0', '1'];
    private stripCount = 60;
    private stripX: number[] = [];
    private stripY: number[] = [];
    private dY: number[] = [];
    private stripFontSize: number[] = [];
    private colors = ['#cefbe4', '#81ec72', '#5cd646', '#54d13c', '#4ccc32', '#43c728'];

    constructor(
      private el: ElementRef,
      private renderer: Renderer2,
      @Inject(PLATFORM_ID) private platformId: Object
    ) {
      if (isPlatformBrowser(this.platformId)) {
        this.renderer.setStyle(document.body, 'background-color', '#131313');
      }
    }

    ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        this.initCanvas();
        this.initStrips();
        this.draw();
      }
    }

    private initCanvas(): void {
      this.canvas = this.renderer.createElement('canvas');
      this.context = this.canvas.getContext('2d');

      if (!this.context) return;

      this.canvas.style.position = 'fixed';
      this.canvas.style.top = '0';
      this.canvas.style.left = '0';
      this.canvas.style.zIndex = '-1';
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;

      this.renderer.appendChild(this.el.nativeElement, this.canvas);
    }

    private initStrips(): void {
      for (let i = 0; i < this.stripCount; i++) {
        this.stripX[i] = Math.floor(Math.random() * this.canvas.width);
        this.stripY[i] = -100;
        this.dY[i] = Math.floor(Math.random() * 7) + 3;
        this.stripFontSize[i] = Math.floor(Math.random() * 16) + 8;
      }
    }

    private drawStrip(x: number, y: number): void {
      if (!this.context) return;

      for (let k = 0; k <= 20; k++) {
        const randChar = this.textStrip[Math.floor(Math.random() * this.textStrip.length)];
        this.context.fillStyle = this.colors[Math.min(k, this.colors.length - 1)];
        this.context.fillText(randChar, x, y);
        y -= this.stripFontSize[k] || 8;
      }
    }

    private draw(): void {
      if (!this.context) return;

      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.shadowOffsetX = this.context.shadowOffsetY = 0;
      this.context.shadowBlur = 8;
      this.context.shadowColor = '#94f475';
      this.context.textBaseline = 'top';
      this.context.textAlign = 'center';

      for (let j = 0; j < this.stripCount; j++) {
        this.context.font = `${this.stripFontSize[j]}px Arial`;

        if (this.stripY[j] > this.canvas.height) {
          this.stripX[j] = Math.floor(Math.random() * this.canvas.width);
          this.stripY[j] = -100;
          this.dY[j] = Math.floor(Math.random() * 7) + 3;
          this.stripFontSize[j] = Math.floor(Math.random() * 16) + 8;
        }

        this.drawStrip(this.stripX[j], this.stripY[j]);
        this.stripY[j] += this.dY[j];
      }

      this.animationFrameId = requestAnimationFrame(() => this.draw());
    }

    @HostListener('window:resize', [])
    onResize(): void {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.initStrips();
    }

    ngOnDestroy(): void {
      if (isPlatformBrowser(this.platformId) && this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
    }

}
