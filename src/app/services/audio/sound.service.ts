import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

export type SoundName = 'hover' | 'click' | 'wheel';

const SOUND_FILES: Record<SoundName, string> = {
  hover: 'assets/audio/hover.mp3',
  click: 'assets/audio/buttonsound.mp3',
  wheel: 'assets/audio/wheel-bicycle-30507.mp3',
};

/**
 * Efectos de sonido de la interfaz.
 *
 * Los elementos `Audio` se crean de forma perezosa y se reutilizan, de modo que
 * no se allocates recursos de audio antes de que el usuario interactúe.
 */
@Injectable({ providedIn: 'root' })
export class SoundService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly instances = new Map<SoundName, HTMLAudioElement>();

  /**
   * Reproduce un efecto de sonido desde el inicio.
   *
   * @returns `true` si el navegador permitió la reproducción, `false` si fue
   *          bloqueada por la política de autoplay.
   */
  play(name: SoundName, volume = 1): Promise<boolean> {
    const audio = this.getInstance(name, volume);
    if (!audio) {
      return Promise.resolve(false);
    }

    audio.currentTime = 0;

    return audio.play().then(
      () => true,
      () => false,
    );
  }

  private getInstance(name: SoundName, volume: number): HTMLAudioElement | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    let audio = this.instances.get(name);
    if (!audio) {
      audio = new Audio(SOUND_FILES[name]);
      this.instances.set(name, audio);
    }

    audio.volume = volume;

    return audio;
  }
}
