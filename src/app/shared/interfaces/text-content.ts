import {SocialIcons} from "~app/shared/enums";
import {SafeHtml} from "@angular/platform-browser";


export interface TextContent<Type = any> {
  _sanitized?: SafeHtml;
  content: string;
}

export interface LinkContent<Type = any> {
  text: string;
  url: string;
  title?: string;
  // blank: boolean;
  icon: SocialIcons;
  _sanitized?: SafeHtml;
}

export interface ProjectContent {
  index: number; // the position of the homepage items -- frontend only
  image: string;
  title: string;
  summary: string; // short text
  url: string; // a url that defines where the project lies.
  link: string; // external URL, if possible
  content: string; // Rich HTML
  textColor: string;
  bgColor: string;
  _sanitized?: SafeHtml;
}
