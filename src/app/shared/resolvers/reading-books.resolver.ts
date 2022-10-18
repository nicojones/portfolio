import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";

import {ReadingBooks} from "~goodreads/shared/interfaces/book";
import {BooksService} from "~app/services";


@Injectable()
export class ReadingBooksResolver implements Resolve<ReadingBooks> {
  constructor(
    private booksService: BooksService
  ) {
  }

  public resolve(): Observable<ReadingBooks> {
    return this.booksService.getCurrentlyReading();
  }
}
