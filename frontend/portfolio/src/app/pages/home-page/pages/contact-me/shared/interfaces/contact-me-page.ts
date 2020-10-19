import { ContentType } from '~app/shared/interfaces';


export interface ContactMePage {
  title: string;
  text: { type: ContentType, content: string }[];
  links: { text: string, url: string }[];
}
