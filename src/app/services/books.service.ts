import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {filter, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

import {environment} from '~env/environment';

import {ReadBooks, ReadingBooks, Shelf} from '~goodreads/shared/interfaces/book';


@Injectable()
export class BooksService {
  public static shelf: Shelf = {read: null, reading: null};

  constructor(
    private http: HttpClient
  ) {
  }

  public getCurrentlyReading(forceLoad: boolean = false): Observable<ReadingBooks> {
    if (BooksService.shelf.reading && !forceLoad) {
      return of(BooksService.shelf.reading);
    }

    return this.http
      .get<ReadingBooks>(`${environment.phpUrl}?books=reading`)
      // .get<Books>(`${ environment.phpUrl }/goodreads/reading`)
      .pipe(
        tap((books: ReadingBooks) => (BooksService.shelf.reading = books))
      );
  }

  public getReadBooks(yearsPast: number, forceLoad: boolean = false): Observable<ReadBooks> {
    if (BooksService.shelf.read && !forceLoad) {
      return of(BooksService.shelf.read);
    }

    return this.http
      .get<ReadBooks>(`${environment.phpUrl}?books=read&years_past=${yearsPast}`)
      .pipe(
        filter(Boolean),
        tap((read: ReadBooks) => {
          BooksService.shelf.read = read;
        })
      );
  }
}
