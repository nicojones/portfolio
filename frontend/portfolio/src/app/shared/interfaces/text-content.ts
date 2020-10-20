import { ContentType } from '~app/shared/interfaces/content-type';


export interface TextContent<Type = any> {
  type: ContentType;
  content: string;
  extra?: Type
}

export interface LinkContent<Type = any> {
  text: string;
  url: string;
  title?: string;
}
