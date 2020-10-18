import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Book } from '~goodreads/shared/interfaces/book';
import { environment } from '~env/environment';
import { getLocalStorage } from '~app/shared/services';
import { StorageKey } from '~app/shared/enums';
import { tap } from 'rxjs/operators';


@Injectable()
export class GoodreadsResolver implements Resolve<unknown> {
  constructor (
    private http: HttpClient
  ) {}

  public resolve (): Observable<Book[]> {
    if (getLocalStorage().getItem(StorageKey.Books)) {
      return of(getLocalStorage().getItem(StorageKey.Books));
    }
    return this.http
      .get<Book[]>(`${ environment.url }/currently-reading`)
      .pipe(
        tap((books: Book[]) => getLocalStorage().setItem(StorageKey.Books, books))
      );
  }
}
