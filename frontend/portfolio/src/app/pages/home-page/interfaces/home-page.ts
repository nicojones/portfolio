import { MyRoutes } from '~routes/routes';


export interface HomePage {
  title: {
    accent: boolean; // use primary color
    text: string;
    textHover: string;
    url: keyof MyRoutes;
    mini?: string;
  }[];
  mobileTap: string;
}
