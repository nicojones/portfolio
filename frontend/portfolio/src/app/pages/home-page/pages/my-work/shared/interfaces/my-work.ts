import { ContentType } from '~app/shared/interfaces';


export interface MyWork {
  text: { type: ContentType, content: string }[];
  title: string;
}
