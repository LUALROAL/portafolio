import { Component, ElementRef, OnDestroy, OnInit, Renderer2, inject } from '@angular/core';
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  PORTFOLIO_URL,
} from '../../../core/site-links';
import { SoundService } from '../../../services/audio/sound.service';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit, OnDestroy {
  readonly githubUrl = GITHUB_URL;
  readonly linkedinUrl = LINKEDIN_URL;
  readonly portfolioUrl = PORTFOLIO_URL;
  readonly emailLink = `mailto:${EMAIL}`;

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly sound = inject(SoundService);

  private redirectTimeout?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.addHoverSoundToLinks();
  }

  ngOnDestroy(): void {
    clearTimeout(this.redirectTimeout);
  }

  /** Sonido de hover para cada enlace de la barra de navegación. */
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

  /** Reproduce el efecto y abre el portfolio en una pestaña nueva. */
  playSoundAndRedirect(): void {
    void this.sound.play('click').then((started) => {
      if (started) {
        this.redirectTimeout = setTimeout(() => this.openPortfolio(), 500);
      } else {
        // Autoplay bloqueado: no esperamos al sonido para no perder la acción.
        this.openPortfolio();
      }
    });
  }

  private openPortfolio(): void {
    window.open(PORTFOLIO_URL, '_blank', 'noopener');
  }
}
