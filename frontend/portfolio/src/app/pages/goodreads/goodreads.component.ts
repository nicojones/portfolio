import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '~goodreads/shared/interfaces/book';
import { fadeIn } from '~app/shared/animations';
import { Carousel, IOptions } from 'latte-carousel';


@Component({
  selector: 'app-goodreads',
  templateUrl: './goodreads.component.html',
  styleUrls: ['./goodreads.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn()]
})
export class GoodreadsComponent implements AfterViewInit {

  /**
   * List of Goodreads books
   */
  public books: Book[] = null;

  /**
   * The current "page" of the carousel
   */
  public carouselIndex: number = 0;

  /**
   * The carousel itself
   */
  public carousel: Carousel;

  constructor (
    private activatedRoute: ActivatedRoute
  ) {
    this.books = this.activatedRoute.snapshot.data.books;
  }

  ngAfterViewInit (): void {
    const options: IOptions = {
      touch: false,
      mode: 'align',
      // buttons: true,
      // dots: true,
      rewind: true,
      autoplay: 0,
      animation: 500,
      responsive: {
        0: { count: 1.1, mode: 'free', buttons: false },
        480: { count: 1.1, mode: 'free', buttons: false },
        768: { count: 1.5, move: 1, buttons: false },
        1440: { count: 1.5, move: 1, buttons: false }
      }
    };

    this.carousel = new Carousel('#carousel', options) as Carousel;
    // this.latte.trigger('goto', 0);
    // this.latte.trigger('update');
  }

  public nextItem () {
    this.carousel.trigger('next');
    this.updateIndex(1);
  }

  public prevItem () {
    this.carousel.trigger('previous');
    this.updateIndex(-1);
  }

  private updateIndex (offset: 1 | -1) {
    this.carouselIndex = Math.min(Math.max(this.carouselIndex + offset, 0), this.books.length - 1);
  }
}
