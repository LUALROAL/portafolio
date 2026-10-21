import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SkillCardLink, SkillSegment } from '../../../models/skill-card.model';

/**
 * Tarjeta reutilizable de habilidad/proyecto.
 *
 * El host actúa como celda del grid de Bootstrap (`col-12 col-md-4`) y como
 * contenedor flex que centra la tarjeta, replicando el marcado original.
 */
@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillCardComponent {
  /** Nombre del icono de Bootstrap Icons, sin el prefijo `bi-`. */
  readonly icon = input.required<string>();

  /** Clase de utilidad de Bootstrap para el color del icono (`text-primary`, ...). */
  readonly iconTone = input.required<string>();

  /** Título de la tarjeta. */
  readonly title = input.required<string>();

  /** Fragmentos del cuerpo; los marcados como `strong` se renderizan en negrita. */
  readonly body = input.required<readonly SkillSegment[]>();

  /** Enlace opcional sobre el título. */
  readonly link = input<SkillCardLink | undefined>(undefined);
}
