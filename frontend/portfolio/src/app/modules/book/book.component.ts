import { Component, Input } from '@angular/core';

import { Book } from '~goodreads/shared/interfaces/book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input()
  public book: Book = {} as Book;

}
