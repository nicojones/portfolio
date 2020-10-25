import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Book } from '~goodreads/shared/interfaces/book';
import { BooksService } from '~app/services';


@Injectable()
export class ReadBooksResolver implements Resolve<unknown> {
  constructor (
    private booksService: BooksService
  ) {
  }

  public resolve (): Observable<Book[]> {
    return this.booksService.getReadBooks();
  }
}
