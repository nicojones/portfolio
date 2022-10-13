import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from "@angular/core";

import {MyRoutes, RouteUrls} from "~routes/routes";

import {slideIn} from "~app/shared/animations";
import {BooksService} from "~app/services";

import {Book, Shelf} from "~goodreads/shared/interfaces/book";
import {zip} from "rxjs";
import {lastBook} from "~app/modules/book/last-book";
import {AboutPage} from "~home-page/pages/about/interfaces/about-page";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideIn()]
})
export class AboutComponent {

  /**
   * The routes
   */
  public readonly RouteUrls: MyRoutes = RouteUrls;

  /**
   * Info about my reading/read books
   */
  public readonly shelf: Shelf = BooksService.shelf;

  /**
   * The last book i updated the reading progress on.
   */
  public readonly lastBook: Book = lastBook;

  /**
   * Title for the page.
   */
  public readonly title: string = "books I've read";

  /**
   * Information about the about page.
   */
  public readonly aboutPage: AboutPage;

  /**
   * Looping through the possible titles.
   */
  public plusIndex = 0;

  constructor(
    public route: ActivatedRoute,
    public booksService: BooksService,
    private ref: ChangeDetectorRef
  ) {
    /**
     * Set the About page.
     */
    this.aboutPage = this.route.snapshot.data.aboutPage;

    /**
     * Get the Read + Reading books.
     */
    zip(
      this.booksService.getCurrentlyReading(),
      this.booksService.getReadBooks()
    )
      .subscribe(() => this.ref.markForCheck());

    /**
     * Change the "multiple-value" title automatically.
     */
    setInterval(() => {
      ++this.plusIndex;
      this.ref.markForCheck();
    }, 5000);
  }
}
