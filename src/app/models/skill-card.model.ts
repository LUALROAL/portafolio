/**
 * Fragmento de texto de una tarjeta.
 * `strong: true` renderiza el fragmento dentro de un `<strong>`.
 */
export interface SkillSegment {
  readonly text: string;
  readonly strong?: boolean;
}

/** Enlace opcional asociado al título de una tarjeta. */
export interface SkillCardLink {
  readonly href: string;
  readonly target?: string;
}

/** Contenido completo de una tarjeta de habilidad o proyecto. */
export interface SkillCard {
  readonly icon: string;
  readonly iconTone: string;
  readonly title: string;
  readonly body: readonly SkillSegment[];
  readonly link?: SkillCardLink;
}
