import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Injectable()
export class AppTitleService {
  public static title: Title;

  public constructor (public titleService: Title) {
    AppTitleService.title = this.titleService;
  }
}
