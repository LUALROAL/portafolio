import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Carrusel de logos de tecnologías. Es puramente visual: no necesita lógica.
 */
@Component({
  selector: 'app-carrosell',
  imports: [],
  templateUrl: './carrosell.component.html',
  styleUrl: './carrosell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarrosellComponent {}
