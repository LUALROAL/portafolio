import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  imports: [],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
  private hoverSound!: HTMLAudioElement;
  private clickSound!: HTMLAudioElement;
  constructor(
    private el: ElementRef, private renderer: Renderer2

  ) {

  }

  ngOnInit() {
    this.hoverSound = new Audio('../../../../assets/audio/hover.mp3');
    this.hoverSound.volume = 1;
    this.clickSound = new Audio('../../../../assets/audio/buttonsound.mp3');
    this.clickSound.volume = 1;
    this.addHoverSoundToLinks();
  }



   addHoverSoundToLinks() {
      const links = this.el.nativeElement.querySelectorAll('a');
      links.forEach((link: HTMLElement) => {
        this.renderer.listen(link, 'mouseenter', () => {
          this.hoverSound.currentTime = 0; // Reiniciar audio
          this.hoverSound.play().catch(err => console.log('Autoplay bloqueado', err));
        });
      });
    }

    @HostListener('mouseenter', ['$event'])
    playHoverSound(event: MouseEvent) {
      if ((event.target as HTMLElement).tagName === 'A') {
        this.hoverSound.currentTime = 0; // Reinicia el sonido si ya está reproduciéndose
        this.hoverSound.play().catch(() => console.log('Autoplay bloqueado'));
      }
    }

    playSound() {
      this.clickSound.currentTime = 0; // Reinicia el sonido
      this.clickSound.play().catch(() => console.log('Autoplay bloqueado'));
    }



  navigateToSection(sectionId: string): void {
    setTimeout(() => {
      const section = document.querySelector(`#${sectionId}`);
      this.playSound();
      if (section) {
        this.playSound();
        const targetPosition = section.getBoundingClientRect().top + window.scrollY;
        this.smoothScrollTo(targetPosition, 2000); // 1000ms = 1s de duración
      }
    }, 100);
  }

  smoothScrollTo(targetY: number, duration: number): void {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Limita el progreso entre 0 y 1
      const easeInOut = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, startY + distance * easeInOut);

      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}
