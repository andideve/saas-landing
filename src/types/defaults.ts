export type Menu = { label: string; to: string };
export type Link = Menu & { external?: boolean };

export interface SiteMetadata {
  title: string;
  description: string;
}

export interface LinkSection {
  title: string;
  links: Link[];
}
