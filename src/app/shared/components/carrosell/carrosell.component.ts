import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-carrosell',
  imports: [],
  templateUrl: './carrosell.component.html',
  styleUrl: './carrosell.component.scss'
})
export class CarrosellComponent {
  private hoverSound!: HTMLAudioElement;

  constructor(
    private el: ElementRef, private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.hoverSound = new Audio('../../../../assets/audio/wheel-bicycle-30507.mp3');
    this.hoverSound.volume = 0.3;
    this.addHoverSoundToLinks();
  }


    addHoverSoundToLinks() {
      const links = this.el.nativeElement.querySelectorAll('');
      links.forEach((link: HTMLElement) => {
        this.renderer.listen(link, 'mouseenter', () => {
          this.hoverSound.currentTime = 0; // Reiniciar audio
          this.hoverSound.play().catch(err => console.log('Autoplay bloqueado', err));
        });
      });
    }

    @HostListener('mouseenter', ['$event'])
    playHoverSound(event: MouseEvent) {
      if ((event.target as HTMLElement).tagName === '') {
        this.hoverSound.currentTime = 0; // Reinicia el sonido si ya está reproduciéndose
        this.hoverSound.play().catch(() => console.log('Autoplay bloqueado'));
      }
    }

}
