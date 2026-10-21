import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  PLATFORM_ID,
  Renderer2,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { MatrixBackgroundComponent } from './shared/components/matrix-background/matrix-background.component';
import { NavMenuComponent } from './shared/components/nav-menu/nav-menu.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MatrixSliderService } from './services/matrix/matrix-slider.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AboutComponent, SkillsComponent, ProjectsComponent, MatrixBackgroundComponent, NavMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly renderer = inject(Renderer2);
  private readonly matrixSliderService = inject(MatrixSliderService);
  private readonly destroyRef = inject(DestroyRef);

  /** Muestra el video de introducción. */
  readonly showVideo = signal(false);

  /** Muestra el contenido principal del portafolio. */
  readonly showContent = signal(false);

  private introTimeout?: ReturnType<typeof setTimeout>;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.setStyle(document.body, 'background-color', '#131313');
    }

    this.matrixSliderService.matrixEntered$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((entered) => {
        if (entered) {
          this.playIntroVideo();
        }
      });
  }

  /** Lanza el video de introducción y programa la aparición del contenido. */
  playIntroVideo(): void {
    this.showVideo.set(true);

    this.introTimeout = setTimeout(() => {
      this.showVideo.set(false);
      this.showContent.set(true);
    }, 24000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.introTimeout);
  }
}
