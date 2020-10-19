import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { Routes } from '~routes/routes';

import { slideIn } from '~app/shared/animations';
import { BooksService } from '~app/services';

import { Book, Shelf } from '~goodreads/shared/interfaces/book';
import { zip } from 'rxjs';
import { lastBook } from '~app/modules/book/last-book';
import { AboutPage } from '~home-page/pages/about/interfaces/about-page';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideIn()]
})
export class AboutComponent {

  public readonly Routes = Routes;

  public readonly shelf: Shelf = BooksService.shelf;

  public readonly lastBook: Book = lastBook;

  public readonly title: string = 'books I\'ve read';

  public readonly aboutPage: AboutPage;

  public plusIndex = 0;

  constructor (
    public route: ActivatedRoute,
    public booksService: BooksService,
    private ref: ChangeDetectorRef
  ) {
    this.aboutPage = this.route.snapshot.data.aboutPage;

    zip(
      this.booksService.getCurrentlyReading(),
      this.booksService.getReadBooks()
    )
      .subscribe(() => this.ref.markForCheck());

    setInterval(() => {
      this.plusIndex = (this.plusIndex + 1) % (this.aboutPage.title.multi.length);
      this.ref.markForCheck();
    }, 5000);
  }
}
