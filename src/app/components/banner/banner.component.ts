import { Component } from '@angular/core';
import { EMAIL } from '../../core/site-links';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  name: string = 'Alejandro Rodriguez';
  readonly emailLink = `mailto:${EMAIL}`;

  readonly stack = ['Angular', 'TypeScript', 'Ionic', 'Bootstrap', 'Git'];

  /** Desplaza la vista hasta una sección de la página. */
  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const section = document.querySelector(`#${sectionId}`);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
