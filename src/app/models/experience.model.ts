/** Experiencia laboral o colaboración profesional. */
export interface ExperienceItem {
  readonly role: string;
  readonly context: string;
  readonly period: string;
  readonly responsibilities: readonly string[];
  readonly technologies: readonly string[];
}

/** Formación académica. */
export interface EducationItem {
  readonly title: string;
  readonly institution: string;
  readonly note: string;
  readonly icon: string;
}
