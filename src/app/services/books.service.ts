import {Injectable} from "@angular/core";
import {Observable, of, take} from "rxjs";

import {ReadBooks, ReadingBooks, Shelf} from "~goodreads/shared/interfaces/book";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {tap} from "rxjs/operators";


@Injectable()
export class BooksService {

  public static shelf: Shelf = {read: null, reading: null};

  constructor(
    private readonly db: AngularFireDatabase
  ) {
  }

  public getCurrentlyReading(): Observable<ReadingBooks> {

    if (BooksService.shelf.reading) {
      return of(BooksService.shelf.reading);
    }

    return this.db
      .object<ReadingBooks>("/books/reading")
      .valueChanges()
      .pipe(
        take(1),
        tap((books: ReadingBooks) => (BooksService.shelf.reading = books))
      );
  }

  public getReadBooks(): Observable<ReadBooks> {

    if (BooksService.shelf.read) {
      return of(BooksService.shelf.read);
    }

    return this.db
      .object<ReadBooks>("/books/read")
      .valueChanges()
      .pipe(
        take(1),
        tap((books: ReadBooks) => (BooksService.shelf.read = books))
      );
  }
}
