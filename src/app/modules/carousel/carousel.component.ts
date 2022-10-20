import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from "@angular/core";

import {Carousel, IOptions} from "latte-carousel";

import {clone} from "~app/functions";

interface MyElement {

}

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  @ViewChild("carouselElement", {static: true})
  public carouselElement: ElementRef<HTMLDivElement>;

  /**
   * List of Goodreads books
   */
  @Input()
  public elements: MyElement[] = null;

  /**
   * If you know the total amount of books, we show this instead of the length of the carousel
   */
  @Input()
  public totalElements: number = null;

  /**
   * If true, the last brings you to the first.
   */
  @Input()
  public wrap = true;

  /**
   * A fake book that could link to Goodreads, for example.
   */
  @Input()
  public lastElement: MyElement = null;

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
  public index = 1;

  constructor(
    private ref: ChangeDetectorRef
  ) {
  }

  public ngOnInit() {
    if (this.lastElement) {
      this.elements = [...clone(this.elements), this.lastElement];
    }
  }

  public ngAfterViewInit(): void {
    this.options = {
      touch: false,
      mode: "align",
      // buttons: true,
      // dots: true,
      rewind: this.wrap,
      autoplay: 0,
      animation: 500,
      responsive: {
        0: {count: 1, buttons: false, touch: true},
        480: {count: 1.1, buttons: false, touch: true},
        768: {count: 1.1, move: 1, buttons: false},
        1440: {count: 2, move: 2, buttons: false}
      }
    };

    this.buildCarousel();

    this.carousel.on("move", () => {
      // @ts-ignore
      this.index = this.carousel ? Math.round(this.carousel.stage.currentIndex + 1) : 1;
      this.ref.markForCheck();
    });
  }

  public nextItem() {
    this.carousel.trigger("next");
  }

  public prevItem() {
    this.carousel.trigger("previous");
  }

  private buildCarousel() {
    this.carousel = new Carousel(this.carouselElement.nativeElement, this.options) as Carousel;
  }

}
