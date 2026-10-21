import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILLS_CARDS } from '../../data/skills.data';
import { CarrosellComponent } from '../../shared/components/carrosell/carrosell.component';
import { SkillCardComponent } from '../../shared/components/skill-card/skill-card.component';

@Component({
  selector: 'app-skills',
  imports: [CarrosellComponent, SkillCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  readonly cards = SKILLS_CARDS;
}
