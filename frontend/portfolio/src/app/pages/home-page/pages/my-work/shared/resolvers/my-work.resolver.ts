import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '~env/environment';

import { MyWork } from '~home-page/pages/my-work/shared/interfaces';


@Injectable()
export class MyWorkResolver implements Resolve<unknown> {
  constructor (
    private http: HttpClient
  ) {
  }

  public resolve (): Observable<MyWork> {
    return this.http.get<MyWork>(`${ environment.url }/section/my-work`);
  }
}
