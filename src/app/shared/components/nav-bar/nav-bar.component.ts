import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  private hoverSound!: HTMLAudioElement;
  private clickSound!: HTMLAudioElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.hoverSound = new Audio('../../../../assets/audio/hover.mp3');
    this.hoverSound.volume = 0.3;

    this.clickSound = new Audio('../../../../assets/audio/buttonsound.mp3');
    this.clickSound.volume = 0.3;
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
}
