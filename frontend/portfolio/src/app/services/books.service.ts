import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { filter, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { environment } from '~env/environment';

import { Books, ReadBooks, Shelf } from '~goodreads/shared/interfaces/book';


@Injectable()
export class BooksService {
  public static shelf: Shelf = { read: null, reading: null, page: 0, totalRead: 0 };

  public constructor (
    private http: HttpClient
  ) {}

  public getCurrentlyReading (forceLoad: boolean = false): Observable<Books> {
    if (BooksService.shelf.reading && !forceLoad) {
      return of(BooksService.shelf.reading);
    }

    return this.http
      .get<Books>(`${ environment.phpUrl }/goodreads/reading`)
      .pipe(
        tap((books: Books) => (BooksService.shelf.reading = books))
      );
  }

  public getReadBooks (forceLoad: boolean = false, page: number = BooksService.shelf.page + 1): Observable<Books> {
    if (BooksService.shelf.read && !forceLoad) {
      return of(BooksService.shelf.read);
    }

    const params = new HttpParams().set('page', page as unknown as string);
    return this.http
      .get<ReadBooks>(`${ environment.phpUrl }/goodreads/read`, { params })
      .pipe(
        filter(Boolean),
        map((read: ReadBooks) => {
          BooksService.shelf.read = read.read;
          BooksService.shelf.totalRead = read.totalRead;
          BooksService.shelf.page = read.page;
          return read.read;
        })
      );
  }
}
