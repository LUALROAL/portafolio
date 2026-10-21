import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EMAIL } from '../../../core/site-links';

/**
 * Tarjeta con el "código" del perfil. Es puramente decorativa.
 */
@Component({
  selector: 'app-card-code',
  imports: [],
  templateUrl: './card-code.component.html',
  styleUrl: './card-code.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardCodeComponent {
  readonly correo: string = EMAIL;
}
