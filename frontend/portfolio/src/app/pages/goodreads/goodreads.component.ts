import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Shelf } from '~goodreads/shared/interfaces/book';
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
  public shelf: Shelf = BooksService.shelf;

  /**
   * Title for the carousel.
   */
  public readonly title: { read: string, reading: string } = {
    reading: 'currently reading',
    read: 'read since last january'
  };

  constructor (
    public booksService: BooksService
  ) {
  }
}
