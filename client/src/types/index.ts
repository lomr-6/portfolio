export interface Meta {
  lang: string;
  title: string;
  description: string;
}

export interface Nav {
  about: string;
  skills: string;
  projects: string;
  services: string;
  contact: string;
  toggleTheme: string;
  toggleLang: string;
}

export interface Hero {
  greeting: string;
  name: string;
  title: string;
  tagline: string;
  cta: string;
  location: string;
}

export interface About {
  heading: string;
  paragraphs: string[];
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Skills {
  heading: string;
  categories: SkillCategory[];
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  stack: string[];
  status: "inProgress" | "completed";
  links?: {
    live?: string;
    github?: string;
  };
}

export interface Projects {
  heading: string;
  emptyState: string;
  statusLabels: {
    inProgress: string;
    completed: string;
  };
  items: Project[];
}

export interface Service {
  title: string;
  description: string;
}

export interface Services {
  heading: string;
  items: Service[];
}

export interface Contact {
  heading: string;
  text: string;
  email: string;
  links: {
    linkedin: string;
    github: string;
  };
}

export interface Footer {
  copyright: string;
}

export interface Translation {
  meta: Meta;
  nav: Nav;
  hero: Hero;
  about: About;
  skills: Skills;
  projects: Projects;
  services: Services;
  contact: Contact;
  footer: Footer;
}

export type Lang = "fr" | "en";
export type Theme = "light" | "dark";
