import { ContentType } from '~app/shared/interfaces';


export interface AboutPage {
  text: { type: ContentType, content: string, extra?: any }[];
  title: {
    first: string;
    multi: string[];
    last: string;
    period: '.' | '';
  };
}
