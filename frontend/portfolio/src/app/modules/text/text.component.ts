import { Component, Input, OnInit } from '@angular/core';
import { LinkContent, TextContent } from '~app/shared/interfaces';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input()
  public text: TextContent[];

  @Input()
  public links: LinkContent[];

  constructor () { }

  ngOnInit (): void {
  }

}
