import {MyRoutes} from "~routes/routes";

export interface LinksPage {
  title: string;
  links: LinksPageLink[];
}

export interface LinksPageLink {
  image: string;
  url: keyof MyRoutes;
  name: string;
  subTitle: string;
  index: number;
}
