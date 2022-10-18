import {Resolve} from "@angular/router";
import {Injectable} from "@angular/core";

import {Observable} from "rxjs";

import {BooksService} from "~app/services";

import {ReadBooks} from "~goodreads/shared/interfaces/book";


@Injectable()
export class ReadBooksResolver implements Resolve<ReadBooks> {
  constructor (
    private booksService: BooksService
  ) {
  }

  public resolve (): Observable<ReadBooks> {
    return this.booksService.getReadBooks();
  }
}
