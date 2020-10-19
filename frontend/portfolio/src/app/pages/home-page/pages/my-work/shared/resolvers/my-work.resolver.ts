import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { environment } from '~env/environment';

import { MyWork } from '~home-page/pages/my-work/shared/interfaces';
import { tap } from 'rxjs/operators';


@Injectable()
export class MyWorkResolver implements Resolve<unknown> {

  public static myWork: MyWork;

  constructor (
    private http: HttpClient
  ) {
  }

  public resolve (): Observable<MyWork> {
    if (MyWorkResolver.myWork) {
      return of(MyWorkResolver.myWork);
    }
    return this.http
      .get<MyWork>(`${ environment.url }/section/my-work-page`)
      .pipe(
        tap((myWork: MyWork) => (MyWorkResolver.myWork = myWork))
      );
  }
}
