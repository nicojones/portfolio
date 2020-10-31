import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { addClass, removeClass } from '~app/functions';


@Directive({
  selector: '[bgImage]'
})
export class ImageDirective implements OnInit {

  @Input('bgImage')
  public backgroundImage: string;

  constructor (private el: ElementRef<HTMLImageElement>) {
    console.log(this.el.nativeElement)
    addClass('loading', this.el.nativeElement);
  }

  public ngOnInit () {
    console.log(this.backgroundImage);

    const img = new Image();
    img.onload = () => {
      this.el.nativeElement.style.backgroundImage = `url(${ this.backgroundImage })`;
      setTimeout(() => {
        removeClass('loading', this.el.nativeElement);
      }, 100);
    }
    img.onerror = () => {
      this.el.nativeElement.attributes['data-loading'].value = 'Could not load'
    }
    img.src = this.backgroundImage;
  }

}
