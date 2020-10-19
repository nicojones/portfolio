import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '~goodreads/shared/interfaces/book';
import { fadeIn } from '~app/shared/animations';
import { BooksService } from '~app/services';


@Component({
  selector: 'app-goodreads',
  templateUrl: './goodreads.component.html',
  styleUrls: ['./goodreads.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn()]
})
export class GoodreadsComponent {

  /**
   * List of Goodreads books
   */
  public books: Book[] = null;

  /**
   * Title for the carousel.
   */
  public readonly title: string = 'currently reading';

  constructor (
    private activatedRoute: ActivatedRoute,
    public booksService: BooksService
  ) {
    this.books = this.activatedRoute.snapshot.data.books;
  }
}
