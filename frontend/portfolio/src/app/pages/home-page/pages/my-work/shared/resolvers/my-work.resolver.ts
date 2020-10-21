import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { environment } from '~env/environment';

import { MyWorkPage } from '~home-page/pages/my-work/shared/interfaces';
import { tap } from 'rxjs/operators';
import { Section } from '~app/shared/enums';


@Injectable()
export class MyWorkResolver implements Resolve<unknown> {

  public static myWork: MyWorkPage;

  constructor (
    private http: HttpClient
  ) {
  }

  public resolve (): Observable<MyWorkPage> {
    if (MyWorkResolver.myWork) {
      return of(MyWorkResolver.myWork);
    }
    return this.http
      .get<MyWorkPage>(`${ environment.url }/section/${ Section.Work }`)
      .pipe(
        tap((myWork: MyWorkPage) => (MyWorkResolver.myWork = myWork))
      );
  }
}
