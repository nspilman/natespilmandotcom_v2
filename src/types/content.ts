interface Frontmatter {
  date: string;
  description: string;
  favorite: boolean;
  published: boolean;
  title: string;
  tags?: string[];
}

export interface Content {
  html: string;
  id: string;
  frontmatter: Frontmatter;
}
