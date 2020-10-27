import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: 'img'
})
export class ImageDirective {

  private readonly originalSrc: string;

  constructor (private el: ElementRef<HTMLImageElement>) {
    this.originalSrc = this.el.nativeElement.src;
    console.log(this.originalSrc);

    this.el.nativeElement.src = 'https://place-hold.it/100x50';

    const img = new Image();
    img.onload = () => {
      this.el.nativeElement.src = this.originalSrc;
    }
    img.src = this.originalSrc;
  }

}
