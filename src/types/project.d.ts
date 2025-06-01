export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  github?: string;
  demo?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
