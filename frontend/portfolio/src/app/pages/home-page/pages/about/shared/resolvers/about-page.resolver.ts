import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { environment } from '~env/environment';

import { AboutPage } from '~home-page/pages/about/interfaces/about-page';
import { tap } from 'rxjs/operators';


@Injectable()
export class AboutPageResolver implements Resolve<AboutPage> {

  public static aboutPage: AboutPage;

  constructor (
    private http: HttpClient
  ) {
  }

  public resolve (): Observable<AboutPage> {
    if (AboutPageResolver.aboutPage) {
      return of(AboutPageResolver.aboutPage);
    }
    return this.http
      .get<AboutPage>(`${ environment.url }/section/about-page`)
      .pipe(
        tap((aboutPage: AboutPage) => (AboutPageResolver.aboutPage = aboutPage))
      );
  }
}
