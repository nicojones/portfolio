import { TextContent } from '~app/shared/interfaces';


export interface AboutPage {
  text: TextContent[];
  title: {
    first: string;
    multi: string[];
    last: string;
    period: '.' | '';
  };
}
