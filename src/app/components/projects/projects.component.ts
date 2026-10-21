import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS_CARDS } from '../../data/projects.data';
import { SkillCardComponent } from '../../shared/components/skill-card/skill-card.component';

@Component({
  selector: 'app-projects',
  imports: [SkillCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  readonly cards = PROJECTS_CARDS;
}
