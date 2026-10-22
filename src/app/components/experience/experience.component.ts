import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EDUCATION_ITEMS, EXPERIENCE_ITEMS } from '../../data/experience.data';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  readonly experience = EXPERIENCE_ITEMS;
  readonly education = EDUCATION_ITEMS;
}
