import { MyRoutes } from '~routes/routes';


export interface HomePage {
  pageTitle: string;
  title: {
    index: number; // the position of the homepage items
    accent: boolean; // use primary color
    text: string;
    textHover: string;
    url: keyof MyRoutes;
    mini?: string;
  }[];
  mobileTap: string;
}
