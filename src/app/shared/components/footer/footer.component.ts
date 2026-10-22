import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../../../core/site-links';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly emailLink = `mailto:${EMAIL}`;
  readonly githubUrl = GITHUB_URL;
  readonly linkedinUrl = LINKEDIN_URL;
}
