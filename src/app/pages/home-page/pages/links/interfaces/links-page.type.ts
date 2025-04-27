import {MyRoutes} from "~routes/routes";

export interface LinksPage {
  title: string;
  links: LinksPageLink[];
}

export type ExternalPageLink = { url: keyof MyRoutes; external: false } | { url: string; external: true };

export interface CommonLinksPageLink {
  image: string;
  name: string;
  subTitle: string;
  index: number;
  hidden?: boolean;
}

export type LinksPageLink = CommonLinksPageLink & ExternalPageLink;
