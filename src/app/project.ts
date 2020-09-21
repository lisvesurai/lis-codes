export interface Project {
  id: number;
  name: string;
  company?: string;
  client?: string;
  date?: string;
  skills?: Array<string>;
  demo_url?: string;
  production_url?: string;
  prototype_url?: string;
  github_url?: string;
  description?: string;
  small_sshot?: string;
  large_sshots?: Array<string>;
}
