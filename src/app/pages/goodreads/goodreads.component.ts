import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Shelf } from '~goodreads/shared/interfaces/book';
import { slideIn } from '~app/shared/animations';
import { BooksService } from '~app/services';
import { Routes } from '~routes/routes';


@Component({
  selector: 'app-goodreads',
  templateUrl: './goodreads.component.html',
  styleUrls: ['./goodreads.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideIn()]
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
    read: `books since January ${ (new Date()).getFullYear() - 1 }`
  };

  public readonly Routes = Routes;

  constructor (
    public booksService: BooksService
  ) {
  }
}
