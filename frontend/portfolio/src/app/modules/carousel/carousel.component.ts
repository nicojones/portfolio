import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Book, Books } from '~goodreads/shared/interfaces/book';
import { Carousel, IOptions } from 'latte-carousel';
import { clone } from '~app/functions';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  /**
   * The title to show near the pagination. For example, "Currently reading"
   */
  @Input()
  public title: string;

  /**
   * The HTML element that contains the carousel.
   */
  @ViewChild('carouselElement', { static: true })
  public carouselElement: ElementRef<HTMLDivElement>;

  /**
   * List of Goodreads books
   */
  @Input()
  public books: Books = null;

  /**
   * If you know the total amount of books, we show this instead of the length of the carousel
   */
  @Input()
  public totalBooks: number = null;

  /**
   * If true, the last brings you to the first.
   */
  @Input()
  public wrap: boolean = true;

  /**
   * A fake book that could link to Goodreads, for example.
   */
  @Input()
  public lastBook: Book = null;

  /**
   * The carousel itself
   * @url https://lattecarousel.dev/
   */
  public carousel: Carousel;

  /**
   * Carousel options
   * @private
   */
  private options: IOptions;

  /**
   * The current index
   */
  public get index (): number {
    // @ts-ignore
    return this.carousel ? (this.carousel.stage.currentIndex + 1) : 1;
  }

  constructor () {}

  ngOnInit () {
    if (this.lastBook) {
      this.books = [...clone(this.books), this.lastBook];
    }
  }

  ngAfterViewInit (): void {
    this.options = {
      touch: false,
      mode: 'align',
      // buttons: true,
      // dots: true,
      rewind: this.wrap,
      autoplay: 0,
      animation: 500,
      responsive: {
        0: { count: 1.1, mode: 'free', buttons: false },
        480: { count: 1.1, mode: 'free', buttons: false },
        768: { count: 2, move: 2, buttons: false },
        1440: { count: 2, move: 2, buttons: false }
      }
    };

    this.buildCarousel();
  }

  public nextItem () {
    this.carousel.trigger('next');
  }

  public prevItem () {
    this.carousel.trigger('previous');
  }

  private buildCarousel () {
    this.carousel = new Carousel(this.carouselElement.nativeElement, this.options) as Carousel;
  }

}
