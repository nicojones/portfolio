import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { environment } from '~env/environment';

import { tap } from 'rxjs/operators';
import { HomePage } from '~home-page/interfaces';
import { SectionJSON } from '~app/shared/enums';


@Injectable()
export class HomePageResolver implements Resolve<unknown> {

  public static homePage: HomePage;

  constructor (
    private http: HttpClient
  ) {
  }

  public resolve (): Observable<HomePage> {
    if (HomePageResolver.homePage) {
      return of(HomePageResolver.homePage);
    }
    return this.http
      .get<HomePage>(`${ environment.getUrl }/${ SectionJSON.Home }`)
      .pipe(
        tap((homePage: HomePage) => (HomePageResolver.homePage = homePage))
      );
  }
}
