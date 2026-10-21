import { Component, ElementRef, OnDestroy, OnInit, Renderer2, inject } from '@angular/core';
import { SoundService } from '../../../services/audio/sound.service';

@Component({
  selector: 'app-nav-menu',
  imports: [],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent implements OnInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly sound = inject(SoundService);

  private scrollFrame?: number;
  private scrollTimeout?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.addHoverSoundToLinks();
  }

  ngOnDestroy(): void {
    if (this.scrollFrame !== undefined) {
      cancelAnimationFrame(this.scrollFrame);
    }
    clearTimeout(this.scrollTimeout);
  }

  /** Sonido de hover para cada enlace del menú lateral. */
  private addHoverSoundToLinks(): void {
    const links = this.el.nativeElement.querySelectorAll('a');
    links.forEach((link: HTMLAnchorElement) => {
      this.renderer.listen(link, 'mouseenter', () => {
        void this.sound.play('hover');
      });
    });
  }

  playSound(): void {
    void this.sound.play('click');
  }

  navigateToSection(sectionId: string): void {
    this.scrollTimeout = setTimeout(() => {
      const section = document.querySelector(`#${sectionId}`);
      this.playSound();

      if (section) {
        const targetPosition = section.getBoundingClientRect().top + window.scrollY;
        this.smoothScrollTo(targetPosition, 2000);
      }
    }, 100);
  }

  /** Desplazamiento suave con duración controlada. */
  private smoothScrollTo(targetY: number, duration: number): void {
    if (this.scrollFrame !== undefined) {
      cancelAnimationFrame(this.scrollFrame);
    }
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const step = (currentTime: number): void => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeInOut = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, startY + distance * easeInOut);

      if (elapsed < duration) {
        this.scrollFrame = requestAnimationFrame(step);
      }
    };

    this.scrollFrame = requestAnimationFrame(step);
  }
}
